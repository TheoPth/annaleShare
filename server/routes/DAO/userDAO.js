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
    }
}
module.exports = user;
