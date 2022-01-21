import express from "express";
import fs from "fs/promises"
import { engine } from "express-handlebars";
import { marked } from "marked";

const app = express();

app.engine("handlebars", engine({
    helpers: {
      markdown: md => marked(md),
    },
    defaultLayout: "main",
    partialsDir: "files/templates/partials"
  }));

app.set("view engine", "handlebars");
app.set("views", "./files/templates");

app.get("/", async (req, res) => {
    res.render("index");
  });

app.get("/movies", async (req, res) => {
    res.render("movies");
});

app.get("/aboutus", async (req, res) => {
  res.render("aboutus");
});

app.use(express.static("./files/static"));
app.use(express.static("./files"))

app.listen(5080);