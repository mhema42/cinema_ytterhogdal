"use strict"

import Movie from "./renderMovies.js";

export default class loadJsonData {
    async loadCurrentMovies() {
        const res = await fetch("./src1/jsonData1/currentMovies.json")
        const data = await res.json();
        return data.map(mv => new Movie(mv)); 
    }

    async loadUpcomingMovies() {
        const res = await fetch("./src1/jsonData1/upcomingMovies.json")
        const data = await res.json();
        return data.map(mv => new Movie(mv)); 
    }
}

