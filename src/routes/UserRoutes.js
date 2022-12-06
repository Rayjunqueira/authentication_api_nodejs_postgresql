const router = require('express').Router();

const CreateUser = require('../controllers/UserController/CreateUser');
const FindAllUser = require('../controllers/UserController/FindAllUser');
const FindOneUser = require('../controllers/UserController/FindOneUser');
const UpdateUser = require('../controllers/UserController/UpdateUser');
const DeleteUser = require('../controllers/UserController/DeleteUser');

router.post('/', CreateUser.store);
router.get('/', FindAllUser.index);
router.get('/:id', FindOneUser.index);
router.put('/:id', UpdateUser.update);
router.delete('/:id', DeleteUser.delete);

module.exports = router;