import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generarExcusa() {
  //write your code here
  function getLists() {
    let who = ["My colleague", "My mom", "My noisy neighbor", "My bird", "My cat","My crush"];
    let action = ["ate", "peed", "crushed", "broke", "lost", "hide"];
    let what = ["my homework", "the keys", "the car", "the proyect", "the concert ticket", "the shopping list"];
    let when = ["before the class", "on my way out", "yesterday", "during my lunch", "while I was praying"];
    return { who, action, what, when };
  }

  function generateExcuse() {
    let lists = getLists();
 
  let randomwho = lists.who[Math.floor(Math.random() * lists.who.length)];
    let randomaction = lists.action[Math.floor(Math.random() * lists.action.length)];
    let randomwhat = lists.what[Math.floor(Math.random() * lists.what.length)];
    let randomwhen = lists.when[Math.floor(Math.random() * lists.when.length)];
    return `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
  }
  document.getElementById("excuse").innerHTML = generateExcuse();   
};
