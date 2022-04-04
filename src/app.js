/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let who = ["el perro", "mi abuela", "su tortuga", "mi paloma"];
  let what = ["se la comió", "la pisó", "la aplastó", "la rompió"];
  let when = [
    "antes de la clase",
    "en este momento",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras oraba"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex] + " ";
};
