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


// Récupère toute les spécialités auxquelles participe l'utisateur
router.get('/getMatiereUser', userDAO.isLoggedIn, (req, res) => {
    droitUserSpeDAO.getSpecialiteUser(req, res, req.user.id, result => {
        res.status(200).json(result);
    });
});


router.get('/getMatiereFromSpe/:idSpe', userDAO.isLoggedIn, (req, res) => {
    matiereDAO.getMatiereFromSpe(req, res, req.params.idSpe, result => {
        res.status(200).json(result);
    });
});

router.delete('/deleteMatiere/:idMatiere', userDAO.isLoggedIn, (req, res) => {
    matiereDAO.deleteMatiere(req, res, req.params.idMatiere, result => {
        res.status(200).json(result);
    });
});

router.get('/getUser/:idSpe', userDAO.isLoggedIn, (req, res) => {
    console.log (req.headers.specialitemonitoring);
    console.log(req.params.idSpe);
    

    userDAO.getUserFromSpe(req, res, req.params.idSpe, result => {
        res.status(200).json(result);
    });
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

router.get('/getDroitUserSpe/:idSpe/:idUser', userDAO.isLoggedIn, (req, res) => {
    droitDAO.getDroitUserSpecialite(req, res, req.params.idUser, req.params.idSpe, result => {
        // Recupere le code droit, il faut le decoder
        res.status(200).json(droitTools.getDroits(result[0].idDroit));
    });
});


router.post('/setDroitUser', userDAO.isLoggedIn, (req, res) => {
    const idUser = req.body.idUser;
    const idSpe = req.body.idSpe;
    const idDroit = req.body.idDroit;
   
    droitDAO.updateDroitUser(req, res, idDroit, idUser, idSpe, result => {
        return res.status(200).json();
    });
      
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
    droitDAO.joinTeam(req, res, req.body.lien, result => {
        // Recupère le code droit, il faut le décoder
        res.status(200).json(droitTools.getDroits(result[0].idDroit));
    });
});


module.exports = router;