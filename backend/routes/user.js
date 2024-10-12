const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../db'); // Import your MySQL connection

// User registration
router.post('/register', async (req, res) => {
  const bcrypt = require('bcrypt');

// User registration route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hashedPassword], (err, results) => {
    if (err) {
      console.error('Error creating user:', err);
      return res.status(400).json({ message: 'Error creating user' });
    }
    res.status(201).json({ message: 'User created' });
  });
});

});

// User login
router.post('/login', (req, res) => {
  // User login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});
});

module.exports = router;
