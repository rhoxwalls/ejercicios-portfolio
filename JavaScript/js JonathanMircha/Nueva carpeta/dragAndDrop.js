"use strict";

const circle = document.querySelector(".circle");
const rectangle = document.querySelector(".rectangle")

circle.addEventListener("dragstart",(e)=>{
   e.dataTransfer.setData("clase",e.target.className);
});

/*
circle.addEventListener("dragstart",()=>console.log(1));
circle.addEventListener("drag",()=>console.log(2));
circle.addEventListener("dragend",()=>console.log(3));
*/


rectangle.addEventListener("dragenter",()=>console.log(1));
rectangle.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log(2)
});
rectangle.addEventListener("drop",(e)=>{
    console.log(e.dataTransfer.getData("clase"));
});
rectangle.addEventListener("dragleave",()=>console.log(4));





