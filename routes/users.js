const express = require('express');
const router = express.Router();
const usersController=require('../controllers/userController');

/* GET users listing. */
router.get('/',usersController.index );

router.get('/login',usersController.login);


module.exports = router;
