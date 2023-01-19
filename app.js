require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const chalk = require("chalk");

//Controllers (route handlers).
const fishController = require("./controllers/fish");

const app = express();
app.set("view engine", "ejs");

const { WEB_PORT, MONGODB_URI } = process.env;

//connect to database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on("error", (err) => {
  console.error(err);
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running.",
    chalk.red("✗")
  );
  process.exit();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/fishes", fishController.list);
app.post("/fishes", fishController.list);
app.post("/create-fish", fishController.create);
app.get("/fishes/delete/:id", fishController.delete);
app.get("/fishes/update/:id", fishController.edit);
app.post("/fishes/update/:id", fishController.update);

app.get("/create-fish", (req, res) => {
  res.render("create-fish", { errors: {} });
});

app.listen(WEB_PORT, () => {
  console.log(
    `Example app listening at http://localhost:${WEB_PORT}`,
    chalk.green("✓")
  );
});
