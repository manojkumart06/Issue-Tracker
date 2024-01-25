const express = require('express');
const router = express.Router();

const homecontroller = require('../controllers/homecontroller');

//take controller using router
router.get('/',homecontroller.home);

module.exports = router;