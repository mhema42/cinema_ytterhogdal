"use strict"

export default class loadMovies {
    async loadAllMovies() {
        const movieList = await fetch("https://lernia-kino-cms.herokuapp.com/api/movies");
    }
};