const mysql = require("mysql");
require('dotenv').config();

const credentials = process.env.JAWSDB_URL || {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const connection = mysql.createConnection(credentials);

// Establish connection
connection.connect(function (err) {
  if (err)  {
    console.log("Error when attempted to connect:", err)
  } else {
    console.log("Connected to database");
  }
});


module.exports = connection;