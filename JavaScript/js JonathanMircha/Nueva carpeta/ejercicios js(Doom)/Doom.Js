/*
let variable = ["Pedro",234,null];

variable.reverse();

console.log(variable)

class Objeto{
    constructor(){};
    hablar(){
    console.log("hola")};
}

const objeto = new Objeto();

/*objeto.hablar = ()=>{
    console.log("modificado afuera");
};
 
objeto.hablar();
*/
/*
"Strict mode";

const validarEdad = (msg)=>{
    let edad;
    
    try {
        if (msg) edad = prompt(msg);
        else edad =prompt("Introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "introduce un número para la edad";
        if(edad > 18) console.log("Sos mayor de edad");
        else console.log("Sos menor de edad");
    }
    catch(e){
        validarEdad(e)
    }
} 

validarEdad()
*/
/*
"strict mode";

const saludar = (nombre)=>{
    return function(){
        console.log("hola " + nombre)
    }
}

let saludo = saludar("pedro");

addEventListener("load",saludo)
*/
"strict mode";
const cambiarTamaño = tamaño =>{
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
}
/*
px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);
*/
document.querySelector(".t12").addEventListener("click",()=>cambiarTamaño(12));

document.querySelector(".t14").addEventListener("click",()=>cambiarTamaño(14));

document.querySelector(".t16").addEventListener("click",()=>cambiarTamaño(16));









