// Your code goes here

//Nav
const nav = document.querySelector("nav");
nav.addEventListener("mouseover", (event) => {
  event.target.style.color = "purple";
  event.target.style.fontSize = "x-large";
});
nav.addEventListener("mouseout", (event) => {
  event.target.style.color = "black";
  event.target.style.fontSize = "large";
});

//h2
const logo = document.querySelector("#logo-heading");
logo.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});
