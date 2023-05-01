
//referencias HTML
const start = document.querySelector("#start");
const container = document.querySelector("#container")
const confirmBtn = document.querySelector("#confirm");
const mayorBtn = document.querySelector("#mayor");
const menorBtn = document.querySelector("#menor");
const numberText = document.querySelector("#number");
const title = document.querySelector("#title");


//
let low = 1;
let high = 100;
let numeroParaAdivinar = 50;

//Listeners HTML
start.addEventListener("click", () => {
    container.classList.toggle("display");
    start.classList.toggle("display");
});

mayorBtn.addEventListener("click", () => {
    low = numeroParaAdivinar + 1;
    numeroParaAdivinar = Math.floor((low + high) / 2);
    numberText.innerText = numeroParaAdivinar;
});
 
menorBtn.addEventListener("click", () => {
    high = numeroParaAdivinar - 1;
    numeroParaAdivinar = Math.floor((low + high) / 2);
    numberText.innerText = numeroParaAdivinar;
});


confirmBtn.addEventListener("click", () => {
    title.innerText = "Tu numero es: ";
    confirmBtn .classList.toggle("display");
    mayorBtn.classList.toggle("display");
    menorBtn.classList.toggle("display");
});
