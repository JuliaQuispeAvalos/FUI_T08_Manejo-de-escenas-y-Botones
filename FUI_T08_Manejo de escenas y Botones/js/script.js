






let carga = document.querySelector('.loader-container');

function loader(){
  carga.classList.add('fade-out');
}  

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();  





const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();



/* document.getElementById("boton").addEventListener("click", e=>{
  window.location.href = "pedidos.html"
});

document.getElementById("boton1").addEventListener("click", e=>{
  window.location.href = "pedidos.html"
}); */