const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');
const multer = require('multer');

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: 'uploads/profile',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Change password route
router.put('/change-password', auth, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.userId);

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Upload profile picture route
router.post('/upload-photo', auth, upload.single('profilePicture'), async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    user.profilePicture = req.file.path;
    await user.save();
    res.json({ profilePicture: user.profilePicture });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;