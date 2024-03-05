import darkTheme from "./Dark_Ligth.js";
import scroolTopButton from "./Btn_Scroll.js";
import countdown from "./Cuenta_Regresiva.js";
import hamburgerMenu from "./menú_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall,shortcuts } from "./tecaldo.js";
import responsiveMedia from "./object_responsiv.js";
import responsiveTester from "./responsive-tester.js";
import userDiviceInfo from "./decteicon-dispositivos.js";
import networkStatus from "./deteccion_red.js";
import detectorWebcam from "./deteccion-de-camara.js";
import getGeolocation from "./geolocalizacion.js";
/*import searchFilters from "./filtros_de_busquedas.js";*/
import lottery from "./Soteador.js";
/*import slider from "./carrusel.js";*/
import scrollSpy from "./scroll-spia.js";
import smartVideo from "./video_inteligente.js";
import Validation_form from "./validation-form.js";
import reader from "./narrador.js";



const d = document;


d.addEventListener("DOMContentLoaded",(e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("perforar_1.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","January 27, 2023 19:51:00","Feliz cumpleaños chavalito carnavalito");
    scroolTopButton(".scroll-top-btn");
    responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href = "https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=92">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    "<a href =https://goo.gl/maps/PFSibuNNigFGtxgJ7 >Ver Mapa</a>",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7244.364001460993!2d-65.41962262776842!3d-24.789220686350045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bcaa4146a5%3A0x5858d5a81b90c139!2sPlaza%209%20de%20Julio!5e0!3m2!1ses-419!2sar!4v1675434291092!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    responsiveTester("responsive-tester");
    userDiviceInfo("user-device");
    detectorWebcam("webcam");
    getGeolocation("localizador");
    /*searchFilters(".card-filter",".card");*/
    lottery("#winner-btn",".player");
    /*slider();*/
    scrollSpy();
    smartVideo();
    Validation_form();
});

d.addEventListener("keydown",e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();

reader();