//
//Asignar clases a elementos del nav
//
let ulnav = document.getElementById("menu-menu-principal");
ulnav.setAttribute("class", "primary-menu-ul nav-ul");

let div1 = document.getElementsByClassName("menu-menu-principal-container");
for(var i = 0; i < div1.length; i++)
    div1[i].className += " style-plain nav-menu-primary";

let div2 = document.getElementsByClassName("elementor-widget-container");
for(var j = 0; j < div2.length; j++)
    div2[j].className += " nv-nav-wrap";

let div3 = document.getElementsByClassName("elementor-element elementor-element-f0393eb elementor-widget elementor-widget-wp-widget-nav_menu");
for(var k = 0; k < div3.length; k++)
    div3[k].className += " item--inner builder-item--primary-menu has_menu";

let div4 = document.getElementsByClassName("elementor-widget-wrap elementor-element-populated");
for(var l = 0; l < div4.length; l++)
    div4[l].className += " builder-item has-nav hfg-item-last col-8 desktop-left"

//
// Creación del elemento 'icono' para ser añadido al nav
//
const icono = document.createElement("i"); // Creación del icono en memoria
const icono2 = document.createElement("i");
icono.className = "fas fa-caret-down"; // Asignándole clase para mostrar el icono de FontAwesome
icono2.className = "fas fa-caret-down"; // Solución "precaria", crear 2 elementos iguales
let aLink254 = document.querySelector("#menu-item-254 a"); // Seleccionar item "Misión Wichí"
aLink254.appendChild(icono); // Insertar icono dentro del item "Misión Wichí"
let aLink256 = document.querySelector("#menu-item-256 a"); // Seleccionar item "Hogar de día"
aLink256.appendChild(icono2); // Insertar icono dentro del item "Hogar de día"
