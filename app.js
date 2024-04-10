/*Selecccionamos la caja */
const caja= document.querySelector(".caja");

/*Seleccionamos el numero que mostrara el resultado */
const resultado= document.querySelector(".resultado");
/*altura por la que multiplicamos para generar los divs que haran los cuadrados dentro de la caja */
const width= 15;
/*array de invasores eliminados */
const invasoresEliminados=[];
let indiceNaveActual=202;
/* Creamos un for para añadir divs dentro de la caja donde se moveran*/
for(let i=0; i<width*width; i++){
    const cuadrado= document.createElement("div");
    caja.appendChild(cuadrado);
}
/*Variable para seleccionar todos los cuadrados que hay dentro de la caja */
const cuadrados = Array.from(document.querySelectorAll(".caja div"));
/*muestra por consola los cuadrados que hay dentro de la caja */
console.log(cuadrados);
/*Array de los aliens*/
const aliens=[
    0,1,2,3,4,5,6,7,8,9,
   15,16,17,18,19,20,21,22,23,24,
   30,31,32,33,34,35,36,37,38,39
]
/*Añadir alien a los cuadrados si no esta dentro del array de eliminados*/
function dibujar(){
    for(let i=0;i<aliens.length;i++){
        if(!invasoresEliminados.includes(i)){
            cuadrados[aliens[i]].classList.add("invasor");
        }
    }
}
/*Llamar a la funcion para dibujar los invasores*/
dibujar();

/*Añadir incio de la nave*/
cuadrados[indiceNaveActual].classList.add("nave");

/*Funcion para mover la nave*/
function moverNave(){
cuadrados[indiceNaveActual].classList.remove("nave");
switch(e.key){
    case"ArrowLeft":
        if(indiceNaveActual % width !== 0){
            indiceNaveActual -=1
            break;
        }
        cuadrados[indiceNaveActual].classList.add("nave");
    }
}
document.addEventListener("keydown", moverNave);
/*Minuto 25.50 video:  https://www.youtube.com/watch?v=s6LrpUTQQn0*/