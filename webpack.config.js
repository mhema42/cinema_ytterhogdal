const path = require("path");

module.exports = {
    entry: {
        index: "./src/js/pages/index.js",
        aboutus: "./src/js/pages/aboutus.js"
        movies: "./src/js/pages/movies.js"
    },
    mode: "development",
    target: "web",
    output: {
        path: path.resolve(__dirname),
        filename: "[name].js",
    }
};