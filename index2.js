const express = require("express");

const app = express();

app.use(allBooks);

app.get("/books", (req, res) => {
  res.send({ route: "/books" });
});

app.get("/books/:name", singleBook, (req, res) => {
  res.send({ bookName: req.name, route: "/books" });
});

function allBooks(req, res, next) {
  console.log("Fetching All Books");
  next();
}

function singleBook(req, res, next) {
  if (req.params.name == "GameOfThrones") {
    req.name = req.params.name;
    console.log("run");
  } else if (req.params.name == "HarryPotter") {
    req.name = req.params.name;
  }
  console.log("checked");
  next();
}

app.listen(4000, (req, res) => {
  console.log("Listening on port 4000");
});
