const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'yourSecretKeyHere';
const router = express.Router();
const db = require('../db'); 

// User signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error creating user:', err);
        return res.status(400).json({ message: 'Error creating user' });
      }
      res.status(201).json({ message: 'User created' });
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

/// User login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).json({ message: 'Oh! Looks like you are new here🤍 Please sign up first!' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Fetch books endpoint
router.get('/books', (req, res) => {
  const query = 'SELECT id, title, author, cover_image, rating_count FROM books';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching books' });
    }
    res.json(results);
  });
});


// Rate a book
router.post('/rate', async (req, res) => {
  const { book_id, rating_value, user_id } = req.body;

  // Ensure book_id and rating_value are provided
  if (!book_id || !rating_value) {
    return res.status(400).json({ message: 'Book ID and rating are required.' });
  }

  // Insert into your database
  const query = 'INSERT INTO ratings (book_id, rating_value, user_id) VALUES (?, ?, ?)';
  
  db.query(query, [book_id, rating_value, user_id], (err) => {
    if (err) {
      console.error('Error submitting rating:', err);
      return res.status(500).json({ message: 'Error submitting rating' });
    }

    // Update the rating count for the book
    const updateQuery = 'UPDATE books SET rating_count = rating_count + 1 WHERE id = ?';
    db.query(updateQuery, [book_id], (err) => {
      if (err) {
        console.error('Error updating rating count:', err);
        return res.status(500).json({ message: 'Error updating rating count' });
      }
      res.status(201).json({ message: 'Rating submitted successfully' });
    });
  });
});

module.exports = router;
