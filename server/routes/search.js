const router = require('express').Router();
const fs = require('fs');
const searchDAO = require('./DAO/searchDAO');
const droitDAO = require('./DAO/droitDAO');
const userDAO = require('./DAO/userDAO');
const droit = require('../shared/enum/droit.enum');


// Renvoie toute les spécialités d'une école
router.post('/getSpecialite', (req, res) => {
    searchDAO.getSpecialite(req, req.body.id, result => {
        res.status(200).json(result);
    });
});

// Renvoie toute les matières d'une spécialité 
router.post('/getMatiere', (req, res) => {
    searchDAO.getMatiere(req, req.body.id, result => {
        res.status(200).json(result);
    });
});

// Renvoie toute les écoles
router.get('/getEcole', (req, res) => {
    searchDAO.getEcole(req, result => {
        res.status(200).json(result);
    });
});

// Renvoie toute les spécilités que possèdent l'école qui possèdent cette spécialité
router.post('/getAllSpecilitiesFromSpeciality', (req, res) => {
    searchDAO.getAllSpecilitiesFromSpeciality(req, req.body.payload.id, result => {
        res.status(200).json(result);
    })    
});

router.post('/getParent', (req, res) => {
    searchDAO.getParent(req, res, req.body.payload.id, result => {
        res.status(200).json(result);
    })
})

router.post('/addEcole', (req, res) => {
    
    searchDAO.addEcole(req, res, req.body.nomEcole, result => {
        res.status(200).json(result);
    })
})

router.post('/addSpecialite', userDAO.isLoggedIn,  (req, res) => {
    // Ajoute la spé
    searchDAO.addSpecialite(req, res, req.body.specialite,  result => {
        // Donne les droits à la l'utilisateur pour la spé qu'il a créé
       
        droitDAO.addDroitSpecialite(req, res, req.user.id, result.maxIdSpecialite, droit.administrer, result => {
            res.status(200).json(result);
        });
       
    });
})

router.post('/addMatiere', (req, res) => {
    searchDAO.addMatiere(req, res,req.body.matiere,  result => {
        res.status(200).json(result);
    })
})

module.exports = router;