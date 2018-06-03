const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');


let matiereDao = {
    downloadFilesRessource: function (req, res, idRessource, callback) {
        req.getConnection(function (err, connection) {
            connection.query('select * from File where idRessource = ?', [idRessource], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }

                callback(rows);
            });
        });
    },

    addFile: function (req, res, form, callback) {
        form.uploadDir = "./tmp/test";
        form.keepExtensions = true; // Garde l'extension pdf;
        form.maxFileSize = 1024 * 1024 * 2; // 20 megabyte

        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log(err);
            }

                        
            const name = files.file.name;
            const idRessource = parseInt(fields.idRessource);
            const nameUpload = getNameUpload(files.file.path);
            const type = fields.type;
            req.getConnection(function (err, connexion) {
                let query = 'INSERT INTO File(idFile, type, idRessource, name) VALUES (?, ?, ?, ?)';
                connexion.query(query, [nameUpload, type, idRessource, name], function (err, rows, fields) {
                    if (err) {
                        return res.status(500).json("Impossible de sauvegarder la file");
                    }
                    return res.status(200).json("Sauvegarde ok");
                });
            });
        });

        callback();
    },

    fileAlreadyPresent: function (req, res, idRessource, callback) {
        req.getConnection(function (err, connection) {
            connection.query('select * from File where idRessource = ?', [idRessource], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }

                callback(!rows.length == 0);
            });
        });
    },


    downloadFile: function (req, res, idFile, callback) {
        // this is where your file will be downloaded
       
        
        const fileName = idFile;
        var filenamewithpath = path.join(__dirname, '../../tmp/test/', fileName);

        if (!fs.existsSync(filenamewithpath)) {
            console.log("File non trouvée");
            return res.status(404).json({ 'message': 'file not found' })
        }
        callback(filenamewithpath);
    },

    deleteFile : function (req, res, link, callback) {
        const fileName = link;
        var filenamewithpath = path.join(__dirname, '../../tmp/test/', link);


        // Suppression de la file
        fs.unlink(filenamewithpath, (err) => {
            if (err) {
                console.log (err);
                return res.status(500);
            }

    
            
            callback();


        });

        // Suppression de la file dans la bd
        req.getConnection(function (err, connection) {
            connection.query('delete from File where idFile = ?', [link], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }

                callback();
            });
        });
    }
}

module.exports = matiereDao;


function getNameUpload(name) {
    
    return name.substring(name.lastIndexOf("/") + 1);
}