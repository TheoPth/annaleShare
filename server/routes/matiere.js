const router = require('express').Router();
const fs = require('fs');
const matiereDAO = require('./DAO/matiereDAO');
const IncomingForm = require('formidable').IncomingForm;
const userDAO = require('./DAO/userDAO');


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

// Ajoute une ressource de type pdf 
router.post('/addRessource', userDAO.isLoggedIn, (req, res) => {
    if (req.headers.matierespe) {
        userDAO.checkDroit(req, res, req.headers.matierespe, 2, aDroit => {
            if (aDroit) {
                matiereDAO.addRessource(req, res, req.body, result => {
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

// Ajout un dossier pour les ressources
router.post('/addTypeRessource', userDAO.isLoggedIn, (req, res) => {
    
    if (req.headers.matierespe) {
        userDAO.checkDroit(req, res, req.headers.matierespe, 2, aDroit => {
            if (aDroit) {
                matiereDAO.addTypeRessource(req, res, req.body, result => {
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



module.exports = router;

