const express = require('express');
const router = express.Router();
const laundryController=require('../controllers/laundryController');
/* GET home page. */
router.get('/', laundryController.index);

router.get('/shop',laundryController.shop);

router.get('/valet',laundryController.valet)

module.exports = router;
