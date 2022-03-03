const express = require("express");
const app = express();

app.get("", function (req, res) {
  res.send("Hello");
});
app.get("/books", function (req, res) {
  res.send({
    Book1: "How to win friends and influence people",
    Book2: "Rich Dad and Poor Dad",
    Book3: "Elements of Programming",
    Book4: "Javascript You don't know",
  });
});
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
