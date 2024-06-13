const express = require('express');
const router = express.Router();
const authHandler = require('../handlers/authHandler');

router.post('/signup', authHandler.signup);
router.post('/signin', authHandler.signin);

module.exports = router;
