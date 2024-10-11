const express = require('express');
const cors = require('cors');
const db = require('./db');  // Import the MySQL connection

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Backend is running!');
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
