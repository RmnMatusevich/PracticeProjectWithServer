const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const mysql = require("mysql");
const obj = require("./client/src/components/collageObject");

const jsonObj = JSON.stringify(obj.collage);

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
    "CREATE TABLE IF NOT EXISTS users (id INT, username varchar(50) NOT NULL, password varchar(255) NOT NULL, firstName varchar(100) NOT NULL, lastName varchar(100) NOT NULL, age int(11) NOT NULL, objCollage TEXT)";
  connection.query(sqlCreateTable, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });

  connection.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
  });
});

const app = express();

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/client/public/index.html")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

app.get("/getCollage", (req, res) => {
  console.log(req);

  res.json(obj);
});

app.post("/login", (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`,
    function (err, result, fields) {
      if (err) {
        res.json({ auth: false });
        throw err;
      } else {
        if (result[0]) {
          console.log(result);
          res.json({ auth: true });
        } else {
          res.json({ auth: false });
        }
      }
    }
  );
});

app.post("/searchCollage", (req, res) => {
  const newCollageObj = [];
  for (let item of obj.collage) {
    if (item.description.toLocaleLowerCase().includes(req.body.input)) {
      newCollageObj.push(item);
    }
  }
  res.json(newCollageObj);
});
app.post("/addCollage", (req, res) => {
  obj.collage.push({
    src: req.body.image,
    tittle: req.body.tittle,
    description: req.body.description,
  });
  connection.query(
    `UPDATE users SET objCollage = '${JSON.stringify(
      obj.collage
    )}' WHERE objCollage = '${jsonObj}'`
  );
  res.json(obj.collage);
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("App is listening on port " + port);
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/signup", (req, res) => {
  const sqlInsert = `INSERT INTO users (id, username, password, firstName, lastName, age, objCollage) VALUES (${req.body.i}, '${req.body.username}', '${req.body.password}', '${req.body.firstName}', '${req.body.lastName}', ${req.body.age}, '${jsonObj}')`;
  connection.query(sqlInsert, function (err, result) {
    if (err) throw err;

    console.log("New user added!");
  });
  res.json({ reg: true });
});
