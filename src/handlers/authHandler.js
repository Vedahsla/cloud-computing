const { auth, db } = require('../utils/firebase');

async function signup(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await db.collection('users').doc(user.uid).set({ name, email });
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}

async function signin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    res.status(200).send({ message: 'User signed in successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error signing in' });
  }
}

async function googleSignin(req, res) {
  const { idToken } = req.body;
  try {
    const user = await firebase.auth().signInWithIdToken(idToken);
    res.status(200).send({ message: 'User signed in successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error signing in' });
  }
}

async function deleteAccount(req, res) {
  const { uid } = req.body;
  try {
    await firebase.auth().deleteUser(uid);
    await db.collection('users').doc(uid).delete();
    res.status(200).send({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error deleting account' });
  }
}

module.exports = { signup, signin, googleSignin, deleteAccount };