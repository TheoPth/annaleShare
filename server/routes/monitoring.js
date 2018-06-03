const userDAO = require('./DAO/userDAO');
const router = require('express').Router();
const fs = require('fs');
const droitUserSpeDAO = require('./DAO/droitUserSpecialite');
const droitTools = require ('../shared/tools/droit.tools');
const droitDAO = require('./DAO/droitDAO');
const matiereDAO = require('./DAO/matiereDAO');


/* Api pour le monitoring, possede tout les appels du template monitoring 
    L'id de la spécialité est passée dans le header pour vérifier les droits du user
*/


// Récupère toute les spécialités auxquelles participe l'utilisateur
router.get('/getMatiereUser', userDAO.isLoggedIn, (req, res) => {
    droitUserSpeDAO.getSpecialiteUser(req, res, req.user.id, result => {
        res.status(200).json(result);
    });
});

// Récupère toute les matière d'une spécialité
router.get('/getMatiereFromSpe/:idSpe', userDAO.isLoggedIn, (req, res) => {
    matiereDAO.getMatiereFromSpe(req, res, req.params.idSpe, result => {
        res.status(200).json(result);
    });
});

// Supprime une matière
router.delete('/deleteMatiere/:idMatiere', userDAO.isLoggedIn, (req, res) => {
    if (req.headers.specialitemonitoring) {
        userDAO.checkDroit(req, res, req.headers.specialitemonitoring, 3, aDroit => {
            if (aDroit) {
                matiereDAO.deleteMatiere(req, res, req.params.idMatiere, result => {
                    res.status(200).json(result);
                });
            } else {
                return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
            }
        })
    } else {
        return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
    }

   

    
});

// Récupère tout les users qui font parti d'une spécialité
router.get('/getUser/:idSpe', userDAO.isLoggedIn, (req, res) => {
    let idSpe = req.headers.specialitemonitoring;
    if (idSpe) {
        userDAO.checkDroit(req, res, idSpe, 1, aDroit => {
            if (aDroit) {
                userDAO.getUserFromSpe(req, res, idSpe, result => {
                    res.status(200).json(result);
                });
            } else {
                return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
            }
        })
    } else {
        return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
    }
});

// Renvoie les droits pour le user actuel pour une spécialité
router.get('/getDroitUserSpe/:idSpe', userDAO.isLoggedIn, (req, res) => {
    droitDAO.getDroitUserSpecialite(req, res, req.user.id, req.params.idSpe, result => {
        // Si le user n'est pas inscrit, il ne possede pas de droits dans cette matière
        if (result[0]) {
            res.status(200).json(droitTools.getDroits(result[0].idDroit));
        } else {
            res.status(200).json(droitTools.getDroits());
        }
        
    });
});

// Récupère les droits d'un user pour une spé
router.get('/getDroitUserSpe/:idSpe/:idUser', userDAO.isLoggedIn, (req, res) => {
    // Soit il récupère ses propres droits, soit il a les droits de monitoring
    // sur la spécialité
    let idSpe = req.headers.specialitemonitoring;
    if (idSpe || req.params.idUser == req.user.id) {
        userDAO.checkDroit(req, res, idSpe, 4, aDroit => {
            if (aDroit) {
                droitDAO.getDroitUserSpecialite(req, res, req.params.idUser, idSpe, result => {
                    // Recupere le code droit, il faut le decoder
                    res.status(200).json(droitTools.getDroits(result[0].idDroit));
                });
            } else {
                return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
            }
        })
    } else {
        return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
    }

   
});


router.post('/setDroitUser', userDAO.isLoggedIn, (req, res) => {
    const idUser = req.body.idUser;
    const idSpecialite = req.body.idSpe;
    const idDroit = req.body.idDroit;

    let idSpe = req.headers.specialitemonitoring;
    if (idSpe) {
        userDAO.checkDroit(req, res, idSpe, 4, aDroit => {
            if (aDroit) {
                console.log (idDroit);
                droitDAO.updateDroitUser(req, res, idDroit, idUser, idSpe, result => {
                    return res.status(200).json();
                });
            } else {
                return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
            }
        })
    } else {
        return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
    } 
});

router.post('/unsetDroitUser', userDAO.isLoggedIn, (req, res) => {
    const idUser = req.body.idUser;
    const idSpe = req.body.idSpe;
    const idDroit = req.body.idDroit;
    
    
    // On vérifie que le user possede bien ce droit et qu'il est inscrit
    let idDroitPrec = droitTools.getUndoDroit(idDroit);
    droitDAO.updateDroitUser(req, res, idDroitPrec, idUser, idSpe, result => {
        return res.status(200).json();
    });
    
});

router.get('/getLienPartage/:idDroit/:temps/:idSpecialite', userDAO.isLoggedIn, (req, res) => {
    const idDroit = req.params.idDroit;
    const temps = req.params.temps;
    const idSpe = req.params.idSpecialite;

    userDAO.checkDroit(req, res, idSpe, droit.Administrer, isAutho => {
        if (isAutho)  {
            droitDAO.getLienPartage(req, res, idDroit, temps, idSpe, link => {
                return res.status(200).json(link);
            });
        } else {
            return res.status(403).json({err : "Vous n'avez pas le droit de créer un lien de partage."});
        }
    }); 
});

router.post('/joinTeam', userDAO.isLoggedIn, (req, res) => {
    // Recupère les informations contenue dans le lien
    droitDAO.decodeLink(req, res, req.body.lien, resultLink => {
        
        droitDAO.getDroitUserSpecialite(req, res, resultLink.idUser, resultLink.idSpecialite, droits => {
            // Si l'utilisateur est déjà inscrit on update 
            console.log (droits);
            if (droits[0]) {
                droitDAO.updateDroitUser(req, res, req.user.id, resultLink.idSpecialite, resultLink.idDroit,  response => {
                    res.status (200).json();
                })
            } else {
                droitDAO.addDroitSpecialite(req, res, req.user.id, resultLink.idSpecialite, resultLink.idDroit, response => {
                    res.status (200).json();
                })
            }
        });
    });
});


module.exports = router;