const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');


let matiereDao = {
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
    }
}

module.exports = matiereDao;