const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',    // Your MySQL host (usually localhost)
  user: 'root',         // Your MySQL root user (or any user you've set up)
  password: 'Paballo1327@',         // Your MySQL password (replace with your password)
  database: 'books_db' // Your database name
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
