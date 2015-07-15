/**
 * Created by deepak on 13/07/15.
 */


var express = require('express');
var router = express.Router();
var userController = require('./controller.js');

router.post('/users', userController.saveUser);

router.get('/users', userController.getAllUsers);

router.delete('/users/:userId', userController.deleteUser);

router.put('/users/:userId', userController.updateUser);

module.exports = router;
