const router = require('express').Router();
const fs = require('fs');
const fileDAO = require('./DAO/fileDAO');
const IncomingForm = require('formidable').IncomingForm;
const userDAO = require('./DAO/userDAO');

// Renvoie toute les types de ressources créé
router.get('/downloadFilesRessource/:idRessource', userDAO.isLoggedIn, (req, res) => {
    if (req.headers.matierespe) {
        userDAO.checkDroit(req, res, req.headers.matierespe, 1, aDroit => {
            if (aDroit) {
                fileDAO.downloadFilesRessource(req, res, req.params.idRessource, result => {
                    console.log ("resulatt file ressource")
                    console.log (result);
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


router.post('/addFile', userDAO.isLoggedIn, (req, res) => {

    if (req.headers.matierespe) {
        userDAO.checkDroit(req, res, req.headers.matierespe, 2, aDroit => {
            if (aDroit) {
                var form = new IncomingForm();

                fileDAO.addFile(req, res, form, result => {
                    res.status(204);
                });
            } else {
                return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
            }
        })
    } else {
        return res.status(403).json("Vous ne pouvez pas réaliser cette action.");
    }

});


router.get('/downloadFile/:id',  function(req, res, next) {
    fileDAO.downloadFile(req, res, req.params.id, result => {
        res.sendFile(result);
    });
});


router.delete('/deleteFile/:link', userDAO.isLoggedIn, function(req, res, next) {
    if (req.headers.matierespe) {
        userDAO.checkDroit(req, res, req.headers.matierespe, 3, aDroit => {
            if (aDroit) {
                fileDAO.deleteFile(req, res, req.params.link, result => {
                    res.status(200);
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