const router = require('express').Router();
const auth = require('./auth');
const user = require('./user');
const search = require('./search');
const matiere = require('./matiere');
const file = require('./file');
const monitoring = require('./monitoring');

router.use('/api/monitoring', monitoring);
router.use('/api/auth', auth);
router.use('/api/user', user);
router.use('/api/search', search);
router.use('/api/matiere', matiere);
router.use('/api/file', file);

module.exports = router;