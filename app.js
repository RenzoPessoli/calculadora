const botonesNumeros = document.querySelectorAll(".botones");
const botonesOperadores = document.querySelectorAll(".botones-operadores");
const botonClear = document.querySelector("#clear");
const input = document.querySelector("#input")


botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => 
    input.value = boton.innerHTML)
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", () =>
    input.value = boton.innerHTML)
});

botonClear.addEventListener("click", () => 
input.value = "");



