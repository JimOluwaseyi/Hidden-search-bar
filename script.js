const btn = document.querySelector(".btn");
const inputText = document.querySelector(".input-text");
const btnContainer = document.querySelector(".btn-container");
const faSolid = document.querySelector(".fa-solid");

let showing = false;

const searchBtn = () => {
  if (showing === false) {
    inputText.style.width = "200px";
    showing = true;
  } else {
    inputText.style.width = "0";
    showing = false;
  }
};

btn.addEventListener("click", searchBtn);
  