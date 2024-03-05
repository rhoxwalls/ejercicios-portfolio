/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

document.querySelectorAll("a").forEach(el => console.log(el))

console.log(document.querySelector(".link-dom").href)

console.log(document.querySelector(".link-dom").getAttribute("href"))


const $linkDom = document.querySelector(".link-dom");
*/




/*
$linkDom.setAttribute("target","_blank");
$linkDom.setAttribute("rel","noopener");
$linkDom.setAttribute("href","https://youtube.com/jonmircha");

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description = "Suscribete a mi canal de youtube y comparte";
console.log($linkDom.dataset.description);
console.log($linkDom.hasAttribute("data-id"));
console.log($linkDom.removeAttribute("data-id"));
console.log($linkDom.hasAttribute("data-id"));
*/


/*
const $linkDom = document.querySelector(".link-dom");

console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log($linkDom.style.color);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));



$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft ="auto" ;
$linkDom.style.marginRight ="auto" ;
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem"


console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log(getComputedStyle($linkDom));


//variables CSS - Custom Propierties CSS

const $html = document.documentElement;
$body = document.body;


let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varYellowColor,varDarkColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","blue");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor)
*/

/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
*/


/*
const $whatIsDOM = document.getElementById("que-es");

let text =`
<p>
El Model de Objeto del Documento(<b><i>DOM-Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Este proveé una representación estructural del documento,permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
<mark>El DOM no es parte de la especificacióm de JavaScript, es una API para los navegadorres.</mark>
</p>
`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
*/


/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.childNodes);
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/

/*
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");


$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año<h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});


const continentes = ["África","América","Asia","Europa","Oceania"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo<h3>");
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach((el)=> ($ul2.innerHTML += `<li>${el}</li>`));


const meses =[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiember",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach((el) =>{
    const $li = docment.createElement("li");
    $li.textConten = el;
    $fragment.appendChild("li");
})

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/

/*
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title:"Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title:"Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title:"Gente",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title:"Naturaleza",
        img: "https://placeimg.com/200/200/Nature",
    },
];

cardContent.forEach(el => {
$template.querySelector("img").setAttribute("src",el.img);
$template.querySelector("img").setAttribute("alt",el.title);
$template.querySelector("figcaption").textContent = el.title;


let $clone = document.importNode($template,true);
$fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/
/*
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[1]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard, $cards.firstElementChild);

document.body.appendChild($cloneCards);
*/



/*InsertAdjacent...
.insertAdjacentElement(position,element);
.insertAdjacentHTML(position,html);
.insertAdjacentText(position,text);

Positions:
1beforebegin(hermano anterior);
2afterbegin(first child);
3beforeend(last child);
4afterend(hermano siguiente);
*/

/*
const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
$cards.insertAdjacentElement("afterbegin",$newCard);

//1prepend
//2append
//3before
//4after
*/

/*
function holaMundo(){
    alert ("Hola Mundo");
    console.log(event);
}


function saludar(nombre="Desconocid@"){
    alert(`hola ${nombre}`);
    console.log(event);
};


const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple"),
$eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
alert("Hola mundo Manejador de Eventos Semántico");
console.log(e);
console.log(event);
};
 

$eventoMultiple.addEventListener("click",holaMundo);

$eventoMultiple.addEventListener("click",(e)=>{
    alert("Manehador de evento múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

$eventoMultiple.addEventListener("click",()=>{
    saludar();
    saludar("Ramón");
});

const removerDobleClick = (e)=>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    $eventoRemover.disabled = true;
}

$eventoRemover.addEventListener("dblclick",removerDobleClick);
*/

/*const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");*/
/*
function flujoEventos(e){
    console.log(`hola, te saluda ${this.className},el click lo originó${e.target.className}`);
    //e.stopPropagation();
}

document.addEventListener("click",(e)=>{
    console.log(`Click en`,e.target);


    
    if(e.target.matches(".event-flujo div")){
        flujoEventos(e);
    };

    if(e.target.matches(".eventos-flujo a")){
        alert("hola soy Ramón mandandote a la pagina de Jon Mircha");e.preventDefault();
    };
});



/*
//console.log($divsEventos);

$divsEventos.forEach(div=>{
    //fase de burbuja
    div.addEventListener("click",flujoEventos);
    //div.addEventListener("click",flujoEventos,false);
    //fase de captura
    //div.addEventListener("click",flujoEventos,true);
    /*div.addEventListener("click",flujoEventos,{
    capture:false,
    once:true});
});

$linkEventos.addEventListener("click", (e)=>{
    alert("Hola que tal soy vos enviandote a la pagina de jon mircha :D");
    e.preventDefault();
    e.stopPropagation();
});
*/

/*
window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("********Evento Resize********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);   
    console.log(e);
});

window.addEventListener("scroll",(e)=>{
    console.clear();
    console.log("********Evento Scroll********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load",(e)=>{
    console.clear();
    console.log("********Evento Load********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

window.addEventListener("DOMContentLoaded",(e)=>{
    console.clear();
    console.log("********Evento DOMContentLoaded********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})
*/

//window.alert("alerta");
//window.confirm("confimación");
//window.prompt("que onda");

/*
const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar= document.getElementById("cerrar-ventana"),
$btnImprimir= document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click",(e)=>{
  ventana = open("https://jonmircha.com");
});


$btnCerrar.addEventListener("click",(e)=>{
   ventana.close();
});
$btnImprimir.addEventListener("click",(e)=>{
    print();
});
*/