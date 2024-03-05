/*(()=>{
const xhr = new XMLHttpRequest(),
$xhr = document.getElementById("xhr"),
$fragment = document.createDocumentFragment();





xhr.addEventListener("readystatechange",(e)=>{
    if(xhr.readyState !== 4) 
    return;


        
    if(xhr.status >= 200 && xhr.status < 300){
       // console.log("éxito");
       // console.log(xhr.responseText);
        let json = JSON.parse(xhr.responseText);
        console.log(json);

        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $xhr.appendChild($fragment);
    }else{
        console.log("error");
        let message = xhr.statusText || "Ocurrió un error";

        $xhr.innerHTML = `Error ${xhr.status} : ${message}`

        //console.log("error");
    };

    console.log("Este mensaje se manda de una");
   
});

xhr.open("GET","https://jsonplaceholder.typicode.com/users");

xhr.send();
})();

//-------- API Fetch --------//

(()=>{
 const  $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
 //   .then((res) =>{
//     console.log(res);
 //       return res.ok ? res.json():Promise.reject(res);
 //   })
    .then((res)=>(res.ok ? res.json():Promise.reject(res)))
    .then((json)=>{
       //console.log(json);
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err)=>{
       // console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status} : ${message}`;
    })
    .finally(()=>{
        console.log("Esto se ejecuta de una , no le impórta nada.")
    })
})();


//---------- Fetch Async(Try-Catch) -----------//

(()=>{
    const  $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

    async function getData(){

        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
             json = await res.json();
            console.log(res,json);
            
            if(!res.ok) throw {status: res.status, statusText: res.statusText};

             json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
    
            $fetchAsync.appendChild($fragment);

            

        }catch(err){
            console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $fetchAsync.innerHTML = `Error ${err.status} : ${message}`;
        }finally{
            console.log("Vam ve");
        }
    }


    getData();
})();

//------------- Axios -----------//

(()=>{
const $axios = document.getElementById("axios"),
$fragment = document.createDocumentFragment();


axios
.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    console.log(res);
    

    res.data.forEach(el=> {
        let $li = document.createElement("li");
    $li.innerHTML =`${el.name} -- ${el.email} -- ${el.phone}`;
    $fragment.appendChild($li);
    });

    $axios.appendChild($fragment);
})

.catch((err)=>{
    console.log(err.response);

    let message = err.response.statusText ||"Ocurrió un error";
    $axios.innerHTML = `Error ${err.response.status}: ${message}`; 
})
.finally(()=>{console.log("esto se ejecuta de una")});


})();
*/

//------ axios Async (try catch finally) ------//
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();


    axios.get("https://jsonplaceholder.typicode.com/users");


    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
            await res.data.forEach(el => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch (err) {
            // console.log(err.response);

            let message = err.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log("ta andando?");
        }
    };

    getData();
})();