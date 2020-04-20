const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var session = require("express-session");
const mysql = require("mysql");
const obj = {
  collage: [
    {
      src:
        "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg",
      tittle: "Spring Boot",
      description:
        "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    },
    {
      src:
        "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg?v=2",
      tittle: "Spring Framework",
      description:
        "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.",
    },
    {
      src:
        "https://spring.io/images/projects/spring-data-flow-9eb1733b76b6cd62cbdd9bc9a2b04e56.svg",
      tittle: "Spring Cloud Data Flow",
      description:
        "An orchestration service for composable data microservice applications on modern runtimes.",
    },
    {
      src:
        "https://spring.io/images/projects/spring-cloud-81fe04ab129ab99da0e7c7115bb09920.svg",
      tittle: "Spring Cloud",
      description:
        "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices",
    },
    {
      src:
        "https://spring.io/images/projects/spring-data-79cc203ed8c54191215a60f9e5dc638f.svg",
      tittle: "Spring Data",
      description:
        "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
    },
    {
      src:
        "https://spring.io/images/projects/spring-integration-ed45c92142d821851bf6c771f4c556bb.svg?v=2",
      tittle: "Spring Integration",
      description:
        "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters",
    },
  ],
};

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
    console.log(result);
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
