const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const droitTools = require('../../shared/tools/droit.tools');

/* Permet de communiquer avec la base en rapport avec les droits */
let droitDAO = {

    // Inscrit un user dans une spécialité
    addDroitSpecialite : function (req, res, idUser, idSpecialite, idDroit, callback) {
        req.getConnection(function (err, connection) {
            const query = "INSERT INTO DroitUserSpecialite(idDroit, idUser, idSpecialite) VALUES (?, ?, ?)";
            connection.query(query, [idDroit, idUser, idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }

                callback(rows);
            });
        });
    },


    // Enlève un droit à l'utilisateur
    deleteDroitSpecialite : function (req, res, idUser, idSpecialite, idDroit, callback) {
        req.getConnection(function (err, connection) {
            let query = "DELETE FROM `DroitUserSpecialite` WHERE idDroit = ? and idUser = ? and idSpecialite = ?";
            connection.query(query, [idDroit, idUser, idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }

                callback(rows);
            });
        });
    }, 

    // Renvoie tout les droits d'un utilisateur pour une spécialité donnée 
    getDroitUserSpecialite : function (req, res, idUser, idSpecialite, callback) {
        req.getConnection(function (err, connection) {
            let query = "SELECT * FROM `DroitUserSpecialite` WHERE idUser = ? and idSpecialite = ?";
            connection.query(query, [idUser, idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }

                
                callback(rows);
            });
        });
    },


    // Update le droit de l'utilisateur
    updateDroitUser : function (req, res, idDroit, idUser, idSpecialite, callback) {
        req.getConnection(function (err, connection) {
            let query = "UPDATE DroitUserSpecialite SET idDroit= ? WHERE idUser = ? and idSpecialite = ?";
            connection.query(query, [idDroit, idUser, idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500);
                }
                
                callback(rows);
            });
        });
    }

}

module.exports = droitDAO;