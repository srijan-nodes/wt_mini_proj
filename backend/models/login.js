const express = require('express');
const router = express.Router();
const User = require('../models/User');  
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(200).json({ message: 'Login successful' }); 
    }

    const isMatch = await user.comparePassword(password);
    if (isMatch) {
      return res.status(200).json({ message: 'Login successful' }); 
    } else {
      return res.status(400).json({ message: 'Invalid email or password' }); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' }); 
  }
});

module.exports = router;
