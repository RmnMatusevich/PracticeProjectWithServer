const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty1234",
  port: 3306,
  database: "nodespring",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connection success!");
  connection.query("CREATE DATABASE IF NOT EXISTS `nodespring`", function (
    err,
    result
  ) {
    if (err) throw err;
    console.log("Database created");
  });

  const sqlCreateTable =
    "CREATE TABLE IF NOT EXISTS users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, username varchar(50) NOT NULL, password varchar(255) NOT NULL, firstName varchar(100) NOT NULL, lastName varchar(100) NOT NULL, age int(11) NOT NULL, objCollage TEXT)";
  connection.query(sqlCreateTable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  connection.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
  });
});

module.exports = connection;
