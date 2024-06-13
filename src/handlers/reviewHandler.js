const { firebase, db } = require('../utils/firebase');

async function addReview(req, res) {
  const { userId, rating, review } = req.body;
  try {
    await db.collection('reviews').add({ userId, rating, review });
    res.status(201).send({ message: 'Review added successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error adding review' });
  }
}

async function getReviews(req, res) {
  try {
    const reviews = await db.collection('reviews').get();
    res.status(200).send(reviews.docs.map(doc => doc.data()));
  } catch (error) {
    res.status(400).send({ message: 'Error getting reviews' });
  }
}

module.exports = { addReview, getReviews };
