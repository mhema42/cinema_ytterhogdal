import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { loadMovie, loadMovies } from "./files/src/movies.js";

const app = express();

app.engine("hbs", engine({
    helpers: {
      markdown: md => marked(md),
    },
    defaultLayout: "index",
    extname: '.hbs',
    partialsDir: "files/templates/partials"
  }));

app.set("view engine", "hbs");
app.set("views", "./files/templates");

app.get("/", async (req, res) => {
    res.render("main");
  });

app.get("/movies", async (req, res) => {
  const movies = await loadMovies();
  res.render("partials/movies", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  if (movie) {
    res.render("partials/movies/movie", { movie });
  } else {
    res.status(404).render("partials/movies/404");
  }
});

app.get("/aboutus", async (req, res) => {
  res.render("partials/aboutus");
});

app.use(express.static("./files"));

export default app;