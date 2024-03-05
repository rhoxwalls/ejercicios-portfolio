"use strict";

const transferirTexturas = (n,e) =>{
    e.dataTransfer.setData("texturas",n);
};

for(let i = 1 ; i < document.querySelector(".texturas").children.length + 1 ; i++){
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTexturas(i,e))
};

const zona = document.querySelector(".zona");
zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
});
zona.addEventListener("dorp",(e)=>{
   let n = e.dataTransfer.getData("textura");
   zona.style.background = `url("textura${n}.JFIF")`;
});


