const express = require('express');
const router = express.Router();
const reviewHandler = require('../handlers/reviewHandler');

router.post('/addReview', reviewHandler.addReview);
router.get('/getReviews', reviewHandler.getReviews);

module.exports = router;