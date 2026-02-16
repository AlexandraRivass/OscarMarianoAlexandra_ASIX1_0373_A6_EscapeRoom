//CONTENIDO DEL TEXTO QUE SE MUEVE
const texto = "Has sido reclutado para una misión digital de última hora. <br> El objetivo parece sencillo, pero nada es lo que parece. Tu computadora es tu única aliada, y tu ingenio será puesto a prueba en un entorno lleno de códigos, enigmas y trampas virtuales.<br> Cada acertijo que resuelvas te permitirá avanzar a la siguiente etapa, aumentando la dificultad y el riesgo.<br> ¿Podrás descifrar todos los retos y escapar del Hacker Room antes de que el sistema te bloquee?<br> Prepárate, porque en este escape room virtual, la lógica, la observación y tus habilidades de hacker serán la única manera de sobrevivir.";

let i = 0; // contador de letra en letra
let txt = ""; //subcadena, se ira mostranddo
let velocidad = 80; // la velocidad que tiene


function escribir(){ 
    if(i < texto.length){ // Si es menor que el contador de la longitud de la cadenaa, no se podra pasar los cadenes
        txt += texto.charAt(i); //la cadena cont, la posicion i es 0
        document.querySelector(".texto").innerHTML = txt; // seleciono la clase del html
        i++; //Amentando en 1 en 1
        setTimeout(escribir, velocidad); // 
    }
}
escribir();

//SONIDO DE PAGINA
document.getElementById("start").addEventListener("click", () => {
    window.location.href = "paginas/index.html";
});

const sonido = new Audio("sonido/sonido.mp3");

// click inicial
document.getElementById("start").addEventListener("click", () => {
    sonido.play();
    document.getElementById("start").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    escribir();
});


//Contador de tiempo

let contador = 0;

const botonIncrementar = document.getElementById('incrementar');
const botonDecrementar = document.getElementById('decrementar');
const valorContador = document.getElementById('valor-contador');

botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});

botonDecrementar.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        valorContador.textContent = contador;
    }
});