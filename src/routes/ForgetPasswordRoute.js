const router = require('express').Router();

const ForgotPassword = require('../controllers/AuthController/ForgotPassword');
const ResetPassword = require('../controllers/AuthController/ResetPassword');

router.post('/', ForgotPassword.store);
router.post('/:id/:token, ResetPassword.store');

module.exports = router;