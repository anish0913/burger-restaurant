// SQL connection
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anish0913',
    database: 'burgers_db'
  });
};

// Creating connection
connection.connect(function (err) {
  if (err) {
    console.error("error: " + err.stack);
    return;
  }
  console.log("connected as " + connection.threadId);
});

module.exports = connection;

