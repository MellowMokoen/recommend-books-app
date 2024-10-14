const mysql = require('mysql');

// Create a connection to the MySQL database using environment variables
const connection = mysql.createConnection({
  host: process.env.DB_HOST,      // Use the DB_HOST environment variable
  user: process.env.DB_USER,      // Use the DB_USER environment variable
  password: process.env.DB_PASS,   // Use the DB_PASS environment variable
  database: process.env.DB_NAME    // Use the DB_NAME environment variable
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

module.exports = connection;
