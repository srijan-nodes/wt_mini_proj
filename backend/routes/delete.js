// backend/routes/delete.js
const express = require('express');
const User = require('../models/User'); 
const router = express.Router();

router.delete('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required to delete an account.' });
  }

  try {
    const user = await User.findOneAndDelete({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'Account deleted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error occurred while deleting the account.' });
  }
});

module.exports = router;
