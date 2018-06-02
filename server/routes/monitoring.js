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

// Renvoie les droits pour le user actuel pour une spécialiate
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


module.exports = router;