"use strict";


const publicaciones = document.querySelector(".publicaciones");


const createPublicationCode = (name,content)=>{
    const container = document.createElement("DIV");
    const comentarios = document.createElement("DIV");
    const nombre = document.cretateElement("H3");
    const contenido = document.cretateElement("p");
    const btnComentario = document.childElement("INPUT");
    const btnEnviar = document.createElement("INPUT");

    container.classList.add("publicacion");
    comentarios.classList.add("comentario");
    btnEnviar.classList.add("enviar");
    btnComentario.classList.add("comentario");

    btnComentario.setAttribute("placeholder","Introduce un comentario");
    h3.textContent = name;
    contenido.textContent = content;

    comentarios.appendChild(btnComentario);
}