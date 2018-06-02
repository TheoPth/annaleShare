const jwt = require('jsonwebtoken');
const router = require('express').Router();
const fs = require('fs');
const uuidv1 = require('uuid/v1');

/* Toutes les fonctions en rapport avec les tables ECOLE, SPECIALITE, MATIERE */
let userDaoModule = {
    getSpecialite: function (req, idEcole, callback) {
        req.getConnection(function (err, connection) {
            connection.query('select * from Specialite where idEcole = ?', [idEcole], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                }

                callback(rows);
            });
        });
    },


    getMatiere: function (req, idSpecialite, callback) {
        req.getConnection(function (err, connection) {
            connection.query('select * from Matiere where idSpecialite = ?', [idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                }

                callback(rows);
            });
        });
    },

    getEcole: function (req, callback) {

        req.getConnection(function (err, connection) {
            connection.query('select * from Ecole', [], function (err, rows, fields) {
                if (err) {
                    console.log(err);

                }

                callback(rows);
            });
        });
    },

    getAllSpecilitiesFromSpeciality: function (req, idSpecialite, callback) {
        req.getConnection(function (err, connection) {
            const query = `select e2.* from Specialite e1, Specialite e2 where e1.idSpecialite = ? and e1.idEcole = e2.idEcole`;
            connection.query(query, [idSpecialite], function (err, rows, fields) {
                if (err) {
                    return res.status(500);
                    console.log(err);

                }

                callback(rows);
            });
        });
    },

    getParent: function (req, res, idSpecialite, callback) {
        req.getConnection(function (err, connection) {
            const query = `select e.* from Ecole e, Specialite s where s.idSpecialite = ?  and e.idEcole = s.idEcole `;
            connection.query(query, [idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }
                console.log(rows);
                callback(rows);
            });
        });
    },

    addEcole: function (req, res, nomEcole, callback) {

        req.getConnection(function (err, connection) {
            const query = `INSERT INTO Ecole(idEcole, nom) VALUES (null, ?)`;
            connection.query(query, [nomEcole], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }

                callback(rows);
            });
        });
    },

    addSpecialite: function (req, res, specialite, callback) {

        req.getConnection(function (err, connection) {
            const query1 = `INSERT INTO Specialite(idSpecialite, nom, idEcole) VALUES (NULL, ?, ?)`;
            connection.query(query1, [specialite.nom, specialite.idEcole], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }

                // Renvoie l'id de la spécialité qui vient d'etre créée
                const query2 = "SELECT MAX(idSpecialite) as maxIdSpecialite from Specialite";

                connection.query(query2, [], function (err, rows, fields) {
                    if (err) {
                        console.log(err);
                        return res.status(500);
                    }
        
                    callback(rows[0]);
                });                
            });
        });
    },

    addMatiere: function (req, res, matiere, callback) {

        req.getConnection(function (err, connection) {
            const query = `INSERT INTO Matiere(idMatiere, Libelle, idSpecialite) VALUES (NULL, ?, ?) `;
            connection.query(query, [matiere.nom, matiere.idSpecialite], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    return res.status(500);
                }

                callback(rows);
            });
        });
    },

};

module.exports = userDaoModule;
