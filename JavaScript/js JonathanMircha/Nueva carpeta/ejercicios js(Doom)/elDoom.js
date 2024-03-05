/*setInterval((()=>{
console.log("hola lokura")
}),3000)*/

/*
function cuadradoCallback(value,callback){
setTimeout(()=>{
    callback(value, value * value)
},0|Math.random()*1000)    
}

cuadradoCallback(0,(value, result)=>{
console.log("Inicia el callback");
console.log(`Callback:${value}, ${result}`)
    cuadradoCallback(0,(value, result)=>{
    console.log(`Callback:${value}, ${result}`);
        cuadradoCallback(1,(value, result)=>{
        console.log(`Callback:${value}, ${result}`);
            cuadradoCallback(2,(value, result)=>{
            console.log(`Callback:${value}, ${result}`);
                cuadradoCallback(3,(value, result)=>{
                console.log(`Callback:${value}, ${result}`);
                    cuadradoCallback(4,(value, result)=>{
                    console.log(`Callback:${value}, ${result}`);
                        cuadradoCallback(5,(value, result)=>{
                        console.log(`Callback:${value}, ${result}`);
                        })
                    })
                })
            })
        })
    })   
})
*/
/*
function cuadradoPromise(value){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value * value
            });
        },0|Math.random()* 1000);      
    });
}


cuadradoPromise(0)
 .then((obj)=>{
    console.log("Inicia promise");
    console.log(`Promise:${obj.value} , ${obj.result}`);
    return cuadradoPromise(1);
    })
 .then(obj => {
    console.log(`Promise:${obj.value} , ${obj.result}`);
    return cuadradoPromise(2);
 })
 .then(obj => {
    console.log(`Promise:${obj.value} , ${obj.result}`);
    return cuadradoPromise(3);
 })
 .then(obj => {
    console.log(`Promise:${obj.value} , ${obj.result}`);
    return cuadradoPromise(4);
 })   
 .then(obj => {
    console.log(`Promise:${obj.value} , ${obj.result}`);
    return cuadradoPromise(5);
 })   
 .then(obj => {
    console.log(`Promise:${obj.value} , ${obj.result}`);
    console.log("Fin de la promise")
 })         
 .catch();
*/
/*
function cuadradoPromise(value){
    if(typeof value !== "number") {
        return Promise.reject(`Error, el valor "${value}" ingresado no es un número`);
    }
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value,
                result: value * value
            });
        },0| Math.random() * 1000);
    });
}


async function cuadradoPromiseAsincrona(){
 try{
    console.log('Inicio Async Function');

    let obj =await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value},${obj.result}`);

     obj =await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value},${obj.result}`);

     obj =await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value},${obj.result}`);

     obj =await cuadradoPromise("3");
    console.log(`Async Function: ${obj.value},${obj.result}`);

 }catch(err){

 }
}

cuadradoPromiseAsincrona()




const cuadradoPromiseAsincronaExperesado = async()=>{
    try{
        console.log('Inicio Async Function');
    
        let obj =await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value},${obj.result}`);
    
         obj =await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value},${obj.result}`);
    
         obj =await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value},${obj.result}`);
    
         obj =await cuadradoPromise("3");
        console.log(`Async Function: ${obj.value},${obj.result}`);
    
     }catch(err){
        console.error(err)
     }
}

cuadradoPromiseAsincronaExperesado()
*/

/*
const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]:"Ramon"
};

console.log(persona);

persona.NOMBRE = "Ramon Eduardo"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]); 

persona[SALUDAR] = function(){
console.log('Hola');
}
console.log(persona);
persona[SALUDAR]();


for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

Object.getOwnPropertySymbols(persona);
*/
/*
const set = new Set([1,2,3,4,5,true,false,false,{},{},"hola","HOla"]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2)
console.log(set2.size)

console.log("recorriendo set");
for(item of set){
    console.log(item)
}

console.log("recorriendo set2")
set2.forEach(item => console.log((item)));


let arr = Array.from(set);

console.log(arr);
console.log(arr[0]);
console.log(arr[9]);

set.delete("HOla");
console.log(set)

console.log(set.has("hola"));
console.log(set.has(19));

set2.clear();
console.log(set2);
*/

