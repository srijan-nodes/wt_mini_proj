const Feedback = require('../models/Feedback');

const submitFeedback = async (req, res) => {
  const { userId, feedback } = req.body;

  try {
    const newFeedback = new Feedback({ user: userId, feedback });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error submitting feedback' });
  }
};

module.exports = { submitFeedback };
