const btn = document.querySelector(".btn-nav")
const pDesplegable = document.querySelector(".p-desplegable")
const desplegable = document.querySelector(".desplegable")
const navItem = document.querySelector(".items")

btn.addEventListener("click", ()=>{
    navItem.classList.toggle("disable")
    console.log(navItem)
})

pDesplegable.addEventListener("click", ()=>{
    desplegable.classList.toggle("close")
})


/* CARRUSEL */
const carrusel = document.querySelector(".carrusel-tracks");

let x = 0;
setInterval(() => {

  if (x < 200) {
    x = x + 100;
  } else {
    x = 0;
    console.log(x);
  }
  carrusel.style.right = `${x}%`;

}, 5000);
