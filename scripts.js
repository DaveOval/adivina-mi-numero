
//referencias HTML
const start = document.querySelector("#start");
const container = document.querySelector("#container")
const confirmBtn = document.querySelector("#confirm");
const mayorBtn = document.querySelector("#mayor");
const menorBtn = document.querySelector("#menor");
const numberText = document.querySelector("#number");


//
const low = 1;
const high = 100;
let confirm = false;
let mayorOmenor;

//Listeners HTML
start.addEventListener("click", () => {
    confirm = true
});

mayorBtn.addEventListener("click", () =>{
    mayorOmenor = - 1
})
menorBtn.addEventListener("click", () => {
    mayorBtn = + 1
})

//Funciones
const binarySearch= () => {

    mayorOmenor = low * high / 2

    number.innerText = mayorOmenor


    while( confirm === false ){

        
    }
    console.log("hola")
}