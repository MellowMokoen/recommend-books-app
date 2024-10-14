const express = require('express');
const cors = require('cors');
const db = require('./db');  // Import the MySQL connection
const path = require('path');
const userRoutes = require('./routes/user');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Use the routes
app.use('/api', userRoutes);

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


// Route to delete books from favorites
app.delete('/api/favorites/:book_id', (req, res) => {
  const bookId = req.params.book_id;
  
  const query = 'DELETE FROM favorites WHERE book_id = ?';

  // Execute the query
  db.query(query, [bookId], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Error removing favorite book' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Book not found in favorites' });
    }

    res.status(200).json({ message: 'Book removed from favorites successfully' });
  });
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
