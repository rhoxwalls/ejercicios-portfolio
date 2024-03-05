/*
"use strict";


const addZeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}




const actualizarHora =()=>{
    const time = new Date();
    let hours = addZeros( time.getHours());
    let minutes = addZeros( time.getMinutes());
    let seconds = addZeros( time.getSeconds());
    document.querySelector(".hours").textContent = hours;
    document.querySelector(".min").textContent = minutes;
    document.querySelector(".sec").textContent = seconds;
}

actualizarHora()

setInterval(actualizarHora,1000)
*/

"use strict";

localStorage.setItem("nombre","pedro")