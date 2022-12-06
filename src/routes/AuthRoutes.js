const router = require('express').Router();

const CreateAuth = require('../controllers/AuthController/CreateAuth');

router.post('/', CreateAuth.store);

module.exports = router;