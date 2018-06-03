const router = require('express').Router();
const fs = require('fs');
const searchDAO = require('./DAO/searchDAO');
const droitDAO = require('./DAO/droitDAO');
const userDAO = require('./DAO/userDAO');
const droit = require('../shared/enum/droit.enum');


// Renvoie toute les spécialités d'une école
router.post('/getSpecialites', (req, res) => {
    searchDAO.getSpecialite(req, req.body.idEcole, result => {
        res.status(200).json(result);
    });
});

// Renvoie toute les matières d'une spécialité 
router.get('/getMatieres/:idSpe', userDAO.isLoggedIn, userDAO.getDroit,  (req, res) => {
    // Avoir le droit de lecture
    let idSpe = req.params.idSpe;
    userDAO.checkDroit(req, res, idSpe, droit.Lecture, isAutho => {
        console.log (isAutho);
        if (isAutho) {
            searchDAO.getMatiere(req, idSpe, result => {
                res.status(200).json(result);
            });
        } else {
            return res.status(200).json ({err : "Vous n'êtes pas authorisé à accéder à ces matières."});
        }
    });

    
});

// Renvoie toute les écoles
router.get('/getEcoles', (req, res) => {
    searchDAO.getEcole(req, result => {
        res.status(200).json(result);
    });
});

router.post('/addEcole', (req, res) => {  
    searchDAO.addEcole(req, res, req.body.nomEcole, result => {
        res.status(200).json(result);
    })
})

router.post('/addSpecialite', userDAO.isLoggedIn,  (req, res) => {
    // Ajoute la spé
    searchDAO.addSpecialite(req, res, req.body.idEcole, req.body.nomSpe,  result => {
        // Donne les droits à la l'utilisateur pour la spé qu'il a créé
        console.log(req.user);
        droitDAO.addDroitSpecialite(req, res, req.user.id, result.maxIdSpecialite, droit.Administrer, result => {
            res.status(200).json(result);
        });
       
    });
})

router.post('/addMatiere', (req, res) => {
    searchDAO.addMatiere(req, res,req.body.nomMatiere, req.body.idSpecialite,  result => {
        res.status(200).json(result);
    })
})

module.exports = router;