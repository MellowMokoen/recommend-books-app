const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
