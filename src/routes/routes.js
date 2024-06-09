const express = require('express');
const router = express.Router();
const routeHandler = require('../handlers/routeHandler');

router.post('/getOptimalRoute', routeHandler.getOptimalRoute);

module.exports = router;