"use strict";

const cajas = document.querySelectorAll(".caja");

const verifyvisivility = (entries) => {
   for (const entry of entries) {
    if (entry.isIntersecting) console.log("se esta viendo la caja: ", entry.target.textContent)
   }
}



const observer = new IntersectionObserver(verifyvisivility);


for (const caja of cajas){
    observer.observe(caja);
}