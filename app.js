const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public"));
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/view", (req, res) => {
  res.render("view");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.get("/edit", (req, res) => {
  res.render("edit");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
