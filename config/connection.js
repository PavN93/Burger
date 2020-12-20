const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT,
  user: "root",
  password: process.env.DB_PASS,
  database: "burger",
});


// Establish connection
connection.connect(function (err) {
  if (err)  {
    console.log("Error when attempted to connect:", err)
  } else {
    console.log("Connected to database");
  }
});


module.exports = connection;