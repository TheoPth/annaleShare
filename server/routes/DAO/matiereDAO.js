const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');

/* Toutes les fonctions en rapport avec les tables en rapport avec les ressources ( FILE, RESSOURCES, RESSOURCESTYPE) */

let matiereDao = {
    // Récupère tout les dossiers typeRessources d'une matière
    getTypeRessourceFromMatiere : function (req, res, idMatiere, callback) {
        req.getConnection(function (err, connection) { 
            connection.query('select * from TypeRessource where idMatiere = ?',[idMatiere], function(err, rows, fields) {
                if (err) {
                    console.log (err);
                    res.status(500);
                }
                
                callback(rows);
            });
        });
    },

    // Récupère toute les ressources qui ont le meme id que la ressource passée en paramètre.
    getRessourceFromTypeRessource : function (req, res, idTypeRessource, callback) {
        req.getConnection(function (err, connection) { 
            connection.query('select * from Ressource where idTypeRessource = ?',[idTypeRessource], function(err, rows, fields) {
                if (err) {
                    console.log (err);
                    res.status(500);
                }
                callback(rows);
            });
        });
    },

    // Ajoute un dossier dans lequel seront présent les files
    addRessource : function (req, res, ressource, callback) {
        let query = "INSERT INTO Ressource(idRessource, nom, idTypeRessource) VALUES (?, ?, ?)";
        req.getConnection(function (err, connection) { 
            connection.query(query, [null,  ressource.nom ,ressource.idTypeRessource], function(err, rows, fields) {
                if (err) {
                    console.log (err);
                    res.status(500);
                }
                callback(rows);
            });
        });
    },

    // Ajoute un dossier pour les ressources (dossier eux aussi)
    addTypeRessource : function (req, res, typeRessource, callback) {
        console.log (typeRessource);
        let query = "INSERT INTO TypeRessource(idTypeRessource, name, idMatiere) VALUES (null, ?, ?)";
        req.getConnection(function (err, connection) { 
            connection.query(query, [typeRessource.name, typeRessource.idMatiere], function(err, rows, fields) {
                if (err) {
                    console.log (err);
                    return res.status(500);
                }
                callback(rows);
            });
        });
    },

    // Renvoie tout les spécialités d'une matiere
    getMatiereFromSpe : function (req, res, idSpe, callback) {
        req.getConnection(function (err, connection) {
            const query = `SELECT * FROM Matiere WHERE idSpecialite = ?`;
            connection.query(query, [idSpe], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }
                callback(rows);
            });
        });
    },

     // Renvoie tout les spécialités d'une matiere
     deleteMatiere : function (req, res, idMatiere, callback) {
        req.getConnection(function (err, connection) {
            const query = `DELETE FROM Matiere WHERE idMatiere = ?`;
            connection.query(query, [idMatiere], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }
                callback(rows);
            });
        });
    }
}

module.exports = matiereDao;