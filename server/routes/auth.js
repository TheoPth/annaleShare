const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');



const RSA_KEY_PRIVATE = fs.readFileSync('./rsa/key');
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');


router.post('/signin', (req, res) => {
  req.getConnection(function (err, connexion) {
    let query = 'select * from user where email = ?';
    if (query) {

    }
    connexion.query(query, [req.body.email], function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.status(500);
      }
      let user = rows[0];
      if (typeof user !== 'undefined' && bcrypt.compareSync(req.body.password, user.mdp)) {
        const token = jwt.sign({}, RSA_KEY_PRIVATE, {
          algorithm: 'RS256',
          expiresIn: '1000s',
          subject: JSON.stringify(user.id)
        });
        res.status(200).json(token);
      } else {
        res.status(401).json('Signin fail !');
      }
    });

  });
});

router.get('/refresh-token', (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, RSA_PUBLIC_KEY, (err, decoded) => {
      if (err) { return res.status(403).json('wrong token') }
      const newToken = jwt.sign({}, RSA_KEY_PRIVATE, {
        algorithm: 'RS256',
        expiresIn: '1000s',
        subject: decoded.sub
      })
      res.status(200).json(newToken);
    })
  } else {
    res.status(403).json('no token to refresh !');
  }

});

router.post('/signup', (req, res) => {

  req.getConnection(function (err, connexion) {
    let query = 'insert into user(id, nom, prenom, email, mdp) values (?, ?, ?, ?, ?)';
    let password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
    connexion.query(query, [null, req.body.name, req.body.firstname, req.body.email, password], function (err, rows, fields) {
      if (err) {
        console.log(err);
        return res.status(500).json("sign up fail");
      }
      return res.status(200).json("sign up ok");
    });
  });
});


module.exports = router;

