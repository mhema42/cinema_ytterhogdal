"use strict"

import loadMovies from "../loadMovies";

const activeAndHide = () => {
  [...document.getElementsByClassName("menu-text")].map(x => x.classList.remove("menu-active"));
  [...document.getElementsByClassName("movies-item")].map(x => x.classList.add("movies-hide"));
}

document.querySelector(".menu-all-movies").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-all-movies").classList.add("menu-active");
  document.querySelector(".all-movies-list").classList.remove("movies-hide");
}); 

document.querySelector(".menu-popular-movies").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-popular-movies").classList.add("menu-active");
  document.querySelector(".popular-movies-list").classList.remove("movies-hide");
}); 

document.querySelector(".menu-current-movies").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-current-movies").classList.add("menu-active");
  document.querySelector(".current-movies-list").classList.remove("movies-hide");
}); 

document.querySelector(".menu-upcoming-movies").addEventListener("click", () => {
  activeAndHide(); 
  document.querySelector(".menu-upcoming-movies").classList.add("menu-active");
  document.querySelector(".upcoming-movies-list").classList.remove("movies-hide");


console.log(loadMovies);
});