const mysql = require("mysql");
require('dotenv').config();
const connection = mysql.createConnection(process.env.JAWSDB_URL);

// Establish connection
connection.connect(function (err) {
  if (err)  {
    console.log("Error when attempted to connect:", err)
  } else {
    console.log("Connected to database");
  }
});


module.exports = connection;