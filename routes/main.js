const express = require('express');
const router = express.Router();

const main = require('../controllers/main');


router.get('/', main.show);

module.exports = router;