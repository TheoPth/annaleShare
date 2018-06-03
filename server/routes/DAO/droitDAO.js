const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');
const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');

const path = require('path');
const droitTools = require('../../shared/tools/droit.tools');

/* Permet de communiquer avec la base en rapport avec les droits */
let droitDAO = {

    // Inscrit un user dans une spécialité avec un droit prédéfini
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
    },

    getLienPartage : function (req, res, idDroit, temps, idSpe, callback) {
        // Création du token pour le lien de partage
        console.log (idDroit);


        const token = jwt.sign({}, RSA_KEY_PRIVATE, {
            algorithm: 'RS256',
            expiresIn: JSON.stringify(temps*60)+'s',
            subject: JSON.stringify({d:idDroit,s:idSpe})
            });
        callback (token);
    },

    joinTeam : function (req, res, link, callback) {
        // Création du token pour le lien de partage
        jwt.verify(link, RSA_PUBLIC_KEY, (err, decoded) => {
            if (err) {
                console.log(err);
                console.log('token invalid');
                return res.status(401).json('token invalid');
            }
            const sub = JSON.parse(decoded.sub);

            this.addDroitSpecialite(req, res, req.user.id, sub.s, sub.d, result =>{
                res.status(200);
            }); 
        })
    }

}

module.exports = droitDAO;