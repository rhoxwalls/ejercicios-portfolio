
/*
function contarCaracteres (string =""){

document.write(`La string "${string}"
 tiene ${string.length} caracteres`+"<br>");
}
 contarCaracteres("Hola mundo")
*/
 
/*
 const recortarTexto = (string ="", longitud=undefined)=>{
    (!string)
    ? document.write("No ingresaste un texto!")
    : document.write(string.slice(0, longitud));

 }
recortarTexto("Wasabi abi muchi", 6);
*/
/*
const recortarTexto = (string=prompt("Ingrese un texto"),longitud=prompt("Ingrese la longitud a recortar"))=>{
    (!string)
    ?document.write("No ingresaste un texto!")
    :(longitud===undefined)
    ?document.write("No ingresaste la longitud del recorte!")
    :document.write(string.slice(0, longitud));
}
recortarTexto();
*/
/*
undefined
const anotador = (Lista = prompt("Ingrese su listado"))=>{
   console.log(Lista.split(" "))+"<br>";
   }

anotador()
*/
/*
const repetirTexto = (texto = "", veces = undefined)=>{
    if(!texto)return console.warn("No introdujiste ningun texto");

    if(veces === undefined) return console.warn("No ingresaste las veces a repetir");

    if(veces === 0) return console.warn("El numero de veces no puede ser 0");

    for(let i = 1 ; i <= veces; i ++){
        document.write(`${texto}, ${i}`)};
}

repetirTexto("Wasabi"+"<br>",5)
*/
/*----------------------------------------------------------------------------------*/
/*
function Revertir(texto = ""){

    textoInvertido=""

 for(i = texto.length -1; i >= 0 ; i--){
  textoInvertido += texto[i];
 };  
 return document.write(textoInvertido)
};
Revertir("Evelin")
*/
/*

function Revertir(texto=prompt("Ingrese un texto a invertir")){

(!texto)
?console.warn("No ingresaste un texto")
:document.write(texto.split("").reverse().join(""));
 };  

Revertir()
*/
/*
const textoEnCadena = (cadena = "", texto ="")=>{
    if(!cadena) return console.warn("No ingresaste un texto largo");
    if(!texto) return console.warn("No ingresaste el texto a encontrar");

let i = 0;
    contador = 0;
while(i !== -1){
    i = cadena.indexOf(texto,i);
    if(i !== -1){
        i++;
        contador++; 
    }
}
return document.write(`La palabra ${texto} se repite ${contador} veces`)
}

textoEnCadena("asd asd asd asd asd das das das asd asd asd","asd")
*/
/*
const econtrarPalindromos = (palindromo = "")=>{

    invertir = palindromo.split("").reverse().join("")

    comparar = (invertir === palindromo)
    ? alert(true)
    : alert(false)
    
}

econtrarPalindromos("menem")
*/
/*
const borrarPatron = (str ="" ,patron = "") => {
(!str)
    ? console.warn("No ingresaste un texto")
    :(!patron)
      ?console.warn("No ingresaste un patrón de caracteres")
      :document.write(str.replace(new RegExp(patron,"ig"),""));    


  
};
borrarPatron("xyz1,xyz2,xyz3,xyz4,xyz5","xyz");
*/
/*
const numeroRandom = (min,max)=>{

   document.write(Math.round(Math.random()* (max-min) + min))

}

numeroRandom(501,600)
*/
/*
const capicua = (numero=0)=>{

  numero = numero.toString()

  let  alReves = numero.split("").reverse().join("")

    sies = (numero === alReves) ? true:false;
    return document.write(sies)
}
capicua("525")
*/

/*
const esPar = (numero =parseInt(prompt("Ingrese un numero para saber si es par o impar: ")))=>{
    (numero % 2 === 0) 
    ?document.write("Es par")
    :document.write("Es impar")
}
esPar()
*/
/*
const esPrimo = ( numero = parseInt(prompt("Ingrese un número a saber"))) =>{

if (typeof numero !== "number") return alert("No ingresaste un número")
    
if (numero === 2){
    alert("Es primo");
}    

if(numero === 0 || numero === 1 || numero === 4 ){
   return alert("No es un numero primo"); 
}

let divisible = false

for (let i = 2 ; i < numero ; i++) {
   if (numero % i === 0){
      divisible = true
      break
    }
  } 
  return (divisible)
  ? console.log(`El número ${numero}, No es primo`)
  : console.log(`El número ${numero}, Es primo`)  
}    
esPrimo()
*/
/*
const convertirGrados = (grados=undefined, unidad=undefined)=>{
    if(grados === undefined) return console.warn("No ingresaste ningun grado a convertir.");

    if(typeof grados !== "number")return console.error(`El valor "${grados}" ingresado, NO es un número`);

    if(unidad === undefined) return console.warn("No ingresaste ninguna unidad a convertir.");

    if(typeof unidad !== "string")return console.error(`El valor "${unidad}" ingresado, NO es una cadena de texto`);

    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido")

    if(unidad === "C"){
        return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`);    
    }
    else if(unidad === "F") return console.info(`${grados}°F = ${Math.round(((grados - 32)*(9/5)))}°C`);    
}
convertirGrados(32,"F")
*/

/*
const convertiBinarioDecimal = (numero=undefined, base=undefined) => {

if(numero === undefined) return console.warn("No ingresaste un número a convertir");

if(typeof numero !== "number") return console.warn(`El valor "${numero}" ingresado, NO es un número`);

if(base === undefined) return console.warn("No ingresaste una base a convertir");

if(typeof base !== "number") return console.warn(`El valor "${base}" ingresado, No es un número.`);

if(base === 2){ return document.write(`${numero} base ${base} = ${parseInt(numero,base)}. en decimal`+"<br>")
}else if(base === 10){
    return document.write(`${numero} base ${base} = ${(numero.toString(2))} en binario`)}

}

convertiBinarioDecimal("asd","asd")

convertiBinarioDecimal(567,10)
*/
/*
const descuento = (monto =undefined ,dto = 0) => {

 if(typeof monto !== "number") alert("Ingresate un valor no numerico.");
 if(typeof dto !== "number") alert("Ingresate un valor no numerico.");

 
else return   document.write(`$${monto} - $${dto}% = $${monto - (monto * dto / 100)}`);
 
}

descuento(512,15)
*/
/*

const calcularAnios = (fecha = undefined) => {

if(fecha === undefined) return console.warn("No ingresaste una fecha");

if (!(fecha instanceof Date)) return console.warn("El valor que ingresaste no es una fecha valida!.");

let hoyMenosFecha = new Date().getTime() - fecha.getTime();
aniosEnMs = 1000*60*60*24*365
aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs);

return (Math.sign(aniosHumanos) === -1)
? console.info(`faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
:(Math.sign(aniosHumanos)=== 1)
 ? console.info(`Han pasado ${aniosHumanos} años, desde ${
    fecha.getFullYear()}.`)
 :console.info(`No hay diferencia, este es el año actual ${fecha.getFullYear()}.`);
 } 
calcularAnios(new Date(2025, 7, 23))

*/
/*
const contarVocales = (texto="")=>{
letraMinuscula = texto.toLocaleLowerCase()
vocales = 0

for(i = 0; i < letraMinuscula.toLowerCase().length ; i++){
    if(letraMinuscula[i] === "a"||letraMinuscula[i] === "e" ||letraMinuscula[i] === "i" ||letraMinuscula[i] === "o" ||letraMinuscula[i] === "u"){
       vocales ++
    }
  }
  document.write(`hay ${vocales} vocales. Y hay ${(letraMinuscula.isalpha()-vocales)}`)
}
contarVocales("hola mundo")
*/
/*
const contarLetras = (string = "")=> {

 if (string === "") return console.warn("No ingresaste un texto");

 if(typeof string !== "string") return console.warn("El contenido debe ser un texto");
let vocales = 0;
 consonantes = 0;
 for(let letra of string){
    if(/[AEIOUÁÉÍÓÚaeiouáéíóú]/.test(letra)){
        vocales++;
    }
    if(/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnÑpqrstvwxyz]/.test(letra)){
        consonantes++;
    }
 }
 document.write(`las vocales encontradas son${vocales}, y las consonantes encontradas son ${consonantes}.`);
}

contarLetras("hola mundo")
*/

/*
const validarNombre = (nombre = "")=>{

if( nombre === "")return console.warn ("Ingrese un nombre");

if(typeof nombre !== "string")return console.warn("El nombre ingresado no es una cadena de texo");

let ValidarNombre = /^[A-Za-zÑñáÁÉéÓóúÚüÜ\s]+$/g.test(nombre);

return(ValidarNombre)
?console.info(`"${nombre}",es un nombre válido`)
:console.warn(`"${nombre}", NO es un nombre válido`);
}
validarNombre("")
*/

/*
const validarEmail = (email = "")=>{

    if( email === "")return console.warn ("Ingrese un email");
    
    if(typeof email !== "string")return console.warn("El email ingresado no es una cadena de texo");
    
    let ValidarEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    
    return(ValidarEmail)
    ?console.info(`"${email}",es un email válido`)
    :console.warn(`"${email}", NO es un email válido`);
    }  

    validarEmail("aasdasd@asdasd.com")
*/

/*
const elevarAlCuadrado=(arr=undefined)=>{
if (arr === undefined)return document.write("No ingresastre un arreglo númerico")

if(!(arr instanceof Array))return document.write("el valor que ingresaste no es un arreglo");

if(arr.length === 0)return document.write("el arrreglo esta vacio");

for(let num of arr){
    if(typeof num !== "number")return document.write(`El valor "${num}" ingresado,NO es un número.`);
}

const newArr = arr.map(el => el*el);

return document.write(`Arrego original: ${arr},<br>Arrego elevado al cuadrado: ${newArr}`);

}

elevarAlCuadrado([1,2,3,4,5])
*/
/*
const arrayMinMax = (arr=undefined)=>{

    if (arr === undefined)return document.write("No ingresastre un arreglo númerico")

    if(!(arr instanceof Array))return document.write("el valor que ingresaste no es un arreglo");
    
    if(arr.length === 0)return document.write("el arrreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number")return document.write(`El valor "${num}" ingresado,NO es un número.`);    
    }

return console.log(`Arrego orginal ${arr}\nValor mayor:${Math.max(...arr)}\nValor minimo:${Math.min(...arr)}`)
}
arrayMinMax([1,2,3])
  */
/*
const paresImpares = (arr=undefined)=>{

if(arr === undefined )return console.error("Los array estan vacios.");

if(!(arr instanceof Array))return console.error("No ingresaste los datos en formato Array.");

if(arr.length === 0)return console.error("Los array estan vacios");

for(let num of arr){
    if(typeof num !== "number") return console.error(`${num},No es un valor númerico.`);
}

return console.log({
    pares: arr.filter( num => num % 2 === 0),
    impares: arr.filter(num => num % 2 !== 0)
 })

}        
paresImpares([1,2,3,4,5,6,7,8,9,10])
*/
/*
const ordenarArray = (array = undefined) => {
    if(!(array instanceof Array))return console.error("No ingresaste un array");

    if(array === undefined)return console.error("No ingresaste un array con valores");
    
    if(array.lenght === 0)return console.error("El array esta vacio.")
    
    for(num of array){
        if(typeof num !== "number")return console.error(`El valor ${num}, NO es un valor númerico.`);
    }


    return console.log({
        array,
        deMayorAMenor:array.map(el => el).sort(),
        deMenorAMayor:array.map(el => el).sort().reverse()
        });
}

ordenarArray()
ordenarArray(123)
ordenarArray([])
ordenarArray(["adweae"])
ordenarArray([1,2,3,45,6,6,65,4,2,1,247,71,34])
*/
/*
const reducirArray = (array =[])=>{

   return console.log({
    original:array,
    sinDuplicados:array.filter((value,index,self)=> self.indexOf(value)=== index)
   });

}
reducirArray(["x", 10, "x", 2, "10", 10, true, true])
*/
/*
const promedio = (array=undefined)=>{

    return console.info(
        array.reduce((total,num,index,array)=>{
            total += num;
                if(index === array.length-1){
                    return `El promedio de ${array.join(" + ")} es ${total/array.length}`;
                }else{
                    return total;
                }
        })
    )
}
promedio([1,2,3,4,5,6,7,8,9,0])
*/


class Pelicula{
    constructor({id,titulo,estreno,pais,generos,calificacion,director}){
        this.id = id;
        this.titulo = titulo;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;
        this.director = director;
   
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion)
         
    }

        validarNumero(propiedad,valor){
            if(!valor)return console.warn(`${propiedad} "${valor}" está vacío.`);
            if(typeof valor !== "number")return console.warn(`${propiedad} "${valor}" ingresado, NO es un número.`)
        }

        validarLongitudCadena(propiedad,valor,longitud){
            if(valor.length > longitud)return console.error(`${propiedad} "${valor}" exede el número de caracteres permitidos (${longitud}).`);
        } 
       
        validarCadena(propiedad,valor){
            if(!valor)return console.warn(`${propiedad} "${valor}" esta vacío`);
            if(typeof valor !== "string")return console.error(`${propiedad} "${valor}" ingresado, NO es una candena de texto`);

            return true
        }

        validarIMDB(id){
            if(this.validarCadena("IMDB id",id))   
             if(!(/^([a-z]){2}([0-9]){7}$/i.test(id)))
                return console.error(`IMDB id"${id}"no es válido,debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes númericos.`); 
        }

        validarArreglo(propiedad,valor){
            if(!valor)return console.warn(`${propiedad} "${valor}" esta vacío.`);

            if(!(valor instanceof Array))return console.warn(`${propiedad} "${valor}" ingresado, NO es un arreglo.`);

            if(valor.length === 0)return console.warn(`${propiedad} "${valor}" no tiene datos.`);

            for(let string of valor){
                if(typeof string !== "string")return console.error(`El valor "${string}" ingresado, NO es una cadena de texto.`);
            }
            return true

        }
        static get listaGeneros(){
             return["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film", "Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
            }    
            
        static generosAceptados(){
            return console.info(`Los géneros aceptados son:${Pelicula.listaGeneros.join(", ")}`);
        }   




        


        validarTitulo(titulo){
            if(this.validarCadena("Titulo",titulo))
            this.validarLongitudCadena("Titulo",titulo,50);
        }

        validarDirector(director){
            if(this.validarCadena("Director",director))
            this.validarLongitudCadena("Director",director,50);
        }

        validarEstreno(estreno){
            if(this.validarCadena("estreno",estreno))
             if(!(/^([a-z]){3}\s([0-9]){2}\s([0-9]){4}$/i.test(estreno)))
             return console.error(`La fecha del estreno,${estreno}, NO es válida`)
        }

        validarPais(pais){
            if(!(this.validarArreglo("pais",pais)))
            if(pais.length === 0)return console.warn(`El array esta vacío`);
            for(let string of pais){
                if(typeof string !== "string")return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto.`);
            }
        }

        validarGeneros(generos){
            if(this.validarArreglo("Géneros",generos)){
                for(let genero of generos){             
                   if(!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Género(s) incorrectos"${generos.join(", ")}"`);
                    Pelicula.generosAceptados()
                   }
                }
            }
        }

        validarCalificacion(calificacion){
            (this.validarNumero("Calificación",calificacion));
            return (calificacion < 0 || calificacion > 10)
            ? console.error("La calificacion debe ser en un rango de 0 a 10")
            : this.calificacion = calificacion.toFixed(1);
        }
        
        fichaTecnica(){
           console.log(`Ficha Técnica:\nTítulo:"${this.titulo}""<br>"Director:${this.director}\nEstreno:"${this.estreno}"\nPaís:"${this.pais.join("-")}"\nGénero:"${this.generos.join(", ")}"\nCalificación:"${this.calificacion}"\nIMDB id:"${this.id}".`);
        }
    }
  
/*
tt0075148



*/
/*const peli = new Pelicula({
    calificacion:9.178,
    director:"dios",
    estreno:"ago 23 1991",
    generos:["Comedy","Romance"],
    id:"tt0075148",
    pais:["Argentina","Venezuela"],
    titulo:"se la vite",    
})
peli.fichaTecnica()*/

const misPelis = [
    {
        id:"tt0019130",
        titulo:"asd",
        director:"asd",
        estreno:"mar 18 1991",
        pais:["asd"],
        generos:["Comedy"],
        calificacion:9.7,
    },
    {
        id:"tt4154796",
        titulo:"asd",
        director:"asd",
        estreno:"mar 18 1991",
        pais:["asd","asd"],
        generos:["Comedy"],
        calificacion:6,
    },
    {
        id:"tt4158110",
        titulo:"asd",
        director:"asd",
        estreno:"mar 18 1991",
        pais:["asd","asd"],
        generos:["Comedy"],
        calificacion:5.7,
    }

]


misPelis.forEach(el => new Pelicula(el).fichaTecnica());









