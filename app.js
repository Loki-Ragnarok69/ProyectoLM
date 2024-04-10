/*Selecccionamos la caja */
const caja= document.querySelector(".caja");

/*Seleccionamos el numero que mostrara el resultado */
const resultadoPntalla= document.querySelector(".resultado");

/*altura por la que multiplicamos para generar los divs que haran los cuadrados dentro de la caja */
const width= 15;

/*array de invasores eliminados */
const invasoresEliminados=[];

/*indice de la nave */
let indiceNaveActual=202;

/*indice de los invasores */
let invasoresIndice;

/*variable movimiento a la derecha*/
let movDerecho=true;


let direccion=1;

/* Creamos un for para añadir divs dentro de la caja donde se moveran*/
for(let i=0; i<width*width; i++){
    const cuadrado= document.createElement("div");
    cuadrado.id=i;
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

/*Funcion para eliminar el id invasores de los cuadrados */
function eliminar(){
    for(let i=0; i<aliens.length;i++){
        cuadrados[aliens[i]].classList.remove("invasor");
    }
}

/*Funcoin de movimiento de los invasores */
function moverInvasores(){
    const bordeIzquierdo= aliens[0] % width === 0;
    const bordeDerecho= aliens[aliens.length -1] % width === width -1;
    eliminar();

    
   if(bordeDerecho && movDerecho){
        for(let i=0;i<aliens.length;i++){
        aliens[i] += width +1;
        direccion = -1;
        movDerecho=false;
        }
    }

    if(bordeIzquierdo &&!movDerecho){
        for(let i=0; i<aliens.length; i++){
            aliens[i] += width -1;
            direccion=1,
            movDerecho=true;
        }
    }
    for(let i=0;i<aliens.length;i++){
        aliens[i] += direccion;
        }

    dibujar();

    /*Si dentro del mismo cuadro esta nave e invasor, resultado pasa a poner game over y se detiene el movimiento */
    if(cuadrados[indiceNaveActual].classList.contains("invasor")){
        resultadoPntalla.innerHTML = "GAME OVER";
        clearInterval(invasoresIndice);
    }
    /*Si todos los invasores son eliminados, se genera el has ganasdo */
    if(invasoresEliminados.length=== aliens.length){
        resultadoPntalla="HAS GANADO";
        clearInterval(moverInvasores);
    }
}

/*Intervalo de movimiento de los invasores */
invasoresIndice= setInterval(moverInvasores, 500);

/*minuto 38.14, añadir disparo */

/*Funcion para mover la nave*/
function moverNave(e){
    /*Eliminamos la nave del valor actual */
cuadrados[indiceNaveActual].classList.remove("nave");
switch(e.key){
    case "ArrowLeft" :
        if(indiceNaveActual % width !== 0){
            indiceNaveActual -=1;
        }
        break;
    case "ArrowRight" :
        if(indiceNaveActual % width < width -1){
            indiceNaveActual +=1;
        }
        break;
    }
    /*Añadimos la nave al nuevo valor */
    cuadrados[indiceNaveActual].classList.add("nave");
}

document.addEventListener("keydown", moverNave);




