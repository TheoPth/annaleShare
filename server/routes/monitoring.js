const userDAO = require('./DAO/userDAO');
const router = require('express').Router();
const fs = require('fs');
const droitUserSpeDAO = require('./DAO/droitUserSpecialite');
const droitTools = require ('../shared/tools/droit.tools');
const droitDAO = require('./DAO/droitDAO');
const matiereDAO = require('./DAO/matiereDAO');


/* Api pour le monitoring, possede toute les appels du template monitoring */

// Récupère toute les spécialités auxquelles participe l'utisateur
router.get('/getMatiereUser', userDAO.isLoggedIn, (req, res) => {
    droitUserSpeDAO.getSpecialiteUser(req, res, req.user.id, result => {
        res.status(200).json(result);
    });
});

router.get('/getDroitUserSpe/:idSpe', userDAO.isLoggedIn, (req, res) => {
    droitDAO.getDroitUserSpecialite(req, res, req.user.id, req.params.idSpe, result => {
        res.status(200).json(droitTools.getDroits(result));
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
    userDAO.getUserFromSpe(req, res, req.params.idSpe, result => {
        res.status(200).json(result);
    });
});

router.get('/getDroitUserSpe/:idSpe/:idUser', userDAO.isLoggedIn, (req, res) => {
    
    droitDAO.getDroitUserSpecialite(req, res, req.params.idUser, req.params.idSpe, result => {
        // Recupere le code droit, il faut le decoder
        res.status(200).json(droitTools.getDroits(result));
    });
});


router.post('/setDroitUser', userDAO.isLoggedIn, (req, res) => {
    const idUser = req.body.idUser;
    const idSpe = req.body.idSpe;
    const idDroit = req.body.idDroit;
    droitDAO.getDroitUserSpecialite(req, res, idUser, idSpe, result => {
        // On vérifie que le user n'a pas deja ce droit et qu'il est inscrit dans la matiere
        
        if (result.length > 0 && !droitTools.possedeDroit(idDroit, result[0].idDroit,)) {
            droitDAO.updateDroitUser(req, res, idDroit * result[0].idDroit, idUser, idSpe, result => {
                return res.status(200).json();
            });
        }
    });
});

router.post('/unsetDroitUser', userDAO.isLoggedIn, (req, res) => {
    const idUser = req.body.idUser;
    const idSpe = req.body.idSpe;
    const idDroit = req.body.idDroit;
    droitDAO.getDroitUserSpecialite(req, res, idUser, idSpe, result => {
        // On vérifie que le user n'a pas deja ce droit et qu'il est inscrit dans la matiere
        console.log (droitTools.possedeDroit(result[0].idDroit, idDroit));
        if (result.length > 0 && droitTools.possedeDroit(idDroit, result[0].idDroit)) {
            console.log(result[0].idDroit / idDroit);
            droitDAO.updateDroitUser(req, res, result[0].idDroit / idDroit, idUser, idSpe, result => {
                return res.status(200).json();
            });
        }

        else {
            // TODO
        }
    });
});


module.exports = router;