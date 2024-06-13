const { admin, db } = require('../utils/firebase');

async function signup(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password
    });
    await db.collection('users').doc(user.uid).set({ name, email });
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).send({ message: error.message });
  }
}

async function signin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().getUserByEmail(email);
    res.status(200).send({ message: 'User signed in successfully' });
  } catch (error) {
    console.error('Error signing in user:', error);
    res.status(400).send({ message: error.message });
  }
}

module.exports = { signup, signin };
