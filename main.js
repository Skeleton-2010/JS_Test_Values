let menuBtn = document.querySelector(".BtnMenu");
let menu = document.querySelector(".Menu");
let btnR = document.querySelector(".RadRed");
let btnG = document.querySelector(".RadGreen");
let btnB = document.querySelector(".RadBlue");
let body = document.querySelector("body");

let nameInp = document.querySelector(".NameInp");
let nameText = document.querySelector(".UserName");

let setSize = document.querySelector(".SetSize");
let sizeText = document.querySelector(".SizeText");

let openClose = 0;

menuBtn.addEventListener("click", () => {
  menu.style.marginLeft = "-1px";
  menuBtn.style.marginLeft = "256px";
});

body.addEventListener("mouseleave", () => {
  menu.style.marginLeft = "-257px";
  menuBtn.style.marginLeft = "0px";
});

btnR.addEventListener("click", () => {
  menu.style.border = "1px solid " + btnR.value;
});

btnG.addEventListener("click", () => {
  menu.style.border = "1px solid " + btnG.value;
});

btnB.addEventListener("click", () => {
  menu.style.border = "1px solid " + btnB.value;
});

nameInp.addEventListener("input", () => {
  nameInp.value == ""
    ? (nameText.textContent = "Stranger?")
    : (nameText.textContent = nameInp.value + "?");
});

setSize.addEventListener('input', () => {
    sizeText.style.fontSize = setSize.value + "px"
})
