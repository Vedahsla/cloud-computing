const express = require('express');
const router = express.Router();
const authHandler = require('../handlers/authHandler');

router.post('/signup', authHandler.signup);
router.post('/signin', authHandler.signin);
router.post('/googleSignin', authHandler.googleSignin);
router.delete('/deleteAccount', authHandler.deleteAccount);

module.exports = router;