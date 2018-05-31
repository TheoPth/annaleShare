const router = require('express').Router();
const fs = require('fs');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const userDAO = require('./DAO/userDAO');


router.get('/current', userDAO.isLoggedIn, (req, res) => {
    res.json({ email: req.user.email, name: req.user.nom });
});

module.exports = router;