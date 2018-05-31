const router = require('express').Router();
const fs = require('fs');
const matiereDAO = require('./DAO/matiereDAO');
const IncomingForm = require('formidable').IncomingForm;


// Renvoie toute les types de ressources créé
router.post('/getTypeRessourceFromMatiere', (req, res) => {
    
    matiereDAO.getTypeRessourceFromMatiere(req, res, req.body.id, result => {
        res.status(200).json(result);
    });
});

// Renvoie toute les ressources depuis un typeRessource sélectionné
router.get('/getRessourceFromTypeRessource/:idTypeRessource', (req, res) => {
    
    matiereDAO.getRessourceFromTypeRessource(req, res, req.params.idTypeRessource, result => {
        res.status(200).json(result);
    });
});

router.post('/addRessource', (req, res) => {
    matiereDAO.addRessource(req, res, req.body, result => {
        res.status(200).json(result);
    });
});


router.post('/addTypeRessource', (req, res) => {
    matiereDAO.addTypeRessource(req, res, req.body, result => {
        res.status(200).json(result);
    });
});

module.exports = router;

