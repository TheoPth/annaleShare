const router = require('express').Router();
const fs = require('fs');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const jwt = require('jsonwebtoken');
const User = require('../../models/user.model');

let user = {
    isLoggedIn: function (req, res, next) {
        const token = req.headers.authorization;
        if (token) {
            jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {

                if (err) {
                    console.log(err);
                    console.log('token invalid');
                    return res.status(401).json('token invalid');
                }
                const sub = decoded.sub;

                req.getConnection(function (err, connection) {
                    connection.query('SELECT * from user where id = ?', [sub], function (err, rows, fields) {
                        req.user = rows[0];
                        next();
                    });
                });
            })
        } else {
            res.status(401).json('pas de token !');
        }
    },

    // Renvoie tout les spécialités d'une matiere
    getUserFromSpe : function (req, res, idSpe, callback) {
        req.getConnection(function (err, connection) {
            const query = `select u.id, u.nom, u.prenom from DroitUserSpecialite dus, user u where dus.idSpecialite = ? and dus.idUser = u.id `;
            connection.query(query, [idSpe], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }
                callback(rows);
            });
        });
    },
}
module.exports = user;
