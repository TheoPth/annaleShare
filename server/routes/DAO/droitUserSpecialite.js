
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const dicDroits = require("../../shared/enum/droit.enum");

// Action sur la table droitUserSpecialite
let droitUserSpecialiteDAO = {

    // Renvoie tout les spécialités auxquelles appartient le user
    getSpecialiteUser : function (req, res, userId, callback) {
        req.getConnection(function (err, connection) {
            const query = `SELECT s.idSpecialite, s.nom FROM DroitUserSpecialite dus, Specialite s WHERE idUser = ? and s.idSpecialite = dus.idSpecialite`;
            connection.query(query, [userId], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }

                callback(rows);
            });
        });
    }

};

module.exports = droitUserSpecialiteDAO;


