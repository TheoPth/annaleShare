const router = require('express').Router();
const fs = require('fs');
const fileDAO = require('./DAO/fileDAO');
const IncomingForm = require('formidable').IncomingForm;

// Renvoie toute les types de ressources créé
router.get('/downloadFilesRessource/:idRessource', (req, res) => {
    fileDAO.downloadFilesRessource(req, res, req.params.idRessource, result => {
        console.log ("resulatt file ressource")
        console.log (result);
        res.status(200).json(result);
    });
});


router.post('/addFile', (req, res) =>  {
    var form = new IncomingForm();

    fileDAO.addFile(req, res, form, result => {
        res.status(204);
    });
});


router.get('/downloadFile/:id', function(req, res, next) {
    fileDAO.downloadFile(req, res, req.params.id, result => {
        res.sendfile(result);
    });

   
});



module.exports = router;