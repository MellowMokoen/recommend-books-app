const express = require('express');
const cors = require('cors');
const db = require('./db');  // Import the MySQL connection
const path = require('path');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Serve the 'uploads' folder as static
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route to get all books
app.get('/api/books', (req, res) => {
    const query = 'SELECT * FROM books'; // Fetch all books from the 'books' table
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching books: ', err);
        res.status(500).json({ message: 'Server error' });
      } else {
        res.json(results); // Send the results back to the client
      }
    });
  });
  

// Route to get all books from the database
app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';  // SQL query to get all books
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving books');
    }
    res.json(results);  // Send the result as JSON
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
