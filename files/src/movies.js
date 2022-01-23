import fetch from "node-fetch";

function simplifyMovieObject(movie) {
  return {
    id: movie.id,
    ...movie.attributes,
  };
}

export async function loadMovies() {
  const res = await fetch("https://lernia-kino-cms.herokuapp.com/api/movies");
  const payload = await res.json();
  return payload.data.map(simplifyMovieObject);
}

export async function loadMovie(id) {
  const res = await fetch("https://lernia-kino-cms.herokuapp.com/api/movies/" + id);
  const payload = await res.json();
  return payload.data;
}
