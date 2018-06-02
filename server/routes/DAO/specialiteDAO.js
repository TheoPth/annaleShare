
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');

// Action sur la table droitUserSpecialite
let specialiteDAO = {

    // Renvoie tout les spécialités auxquelles appartient le user
    getSpecialite : function (req, res, userId, callback) {
        req.getConnection(function (err, connection) {
            const query = `SELECT s.idSpecialite, s.nom FROM DroitUserSpecialite dus, Specialite s WHERE idUser = ? and dus.idSpecialite = s.idSpecialite`;
            connection.query(query, [userId], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }
                callback(rows);
            });
        });
    },

    
};

module.exports = specialiteDAO;