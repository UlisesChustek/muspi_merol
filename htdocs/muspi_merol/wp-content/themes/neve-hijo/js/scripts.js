let ulnav = document.getElementById("menu-menu-principal");
let catMision = document.querySelector('[href="http://localhost/muspi_merol/category/mision-wichi/"]');
let catHogar = document.querySelector('[href="http://localhost/muspi_merol/category/hogar-de-dia/"]');

if((catMision === null) && (catHogar === null)) {
    // No ejecutar nada si son nulos ambos
} else if(catHogar === null) {
    // Si catHogar = null, modificar catMision
    catMision.innerHTML = "Misión Wichí";
} else if(catMision === null) {
    // Si catMision = null, modificar catHogar
    catHogar.innerHTML = "Hogar de día San José";
} else {
    // Si catMision y catHogar no son nulos, modificar ambos ??
    catMision.innerHTML = "Misión Wichí";
    catHogar.innerHTML = "Hogar de día San José";
}

// IF para ejecutar la asignación de clases a elementos del header y nav cuando sea necesario
if(ulnav === null) {
    // No ejecutar nada si ulnav = null
} else {
    //
    //Asignar clases a elementos del nav
    //
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
    
    let div3b = document.getElementsByClassName("elementor-element elementor-element-e99923d elementor-widget elementor-widget-wp-widget-nav_menu");
    for(var m = 0; m < div3b.length; m++)
        div3b[m].className += " item--inner builder-item--primary-menu has_menu"
    
    let div4 = document.getElementsByClassName("elementor-widget-wrap elementor-element-populated");
    for(var l = 0; l < div4.length; l++)
        div4[l].className += " builder-item has-nav hfg-item-last desktop-left"
    
    //
    // Creación del elemento 'icono' para ser añadido al nav
    //
    const spanIcono = document.createElement("span");
    const spanIcono2 = document.createElement("span");
    spanIcono.className = "caret";
    spanIcono2.className = "caret";
    const icono = document.createElement("i"); // Creación del icono en memoria
    const icono2 = document.createElement("i");
    icono.className = "fas fa-caret-down"; // Asignándole clase para mostrar el icono de FontAwesome
    icono2.className = "fas fa-caret-down"; // Solución "precaria", crear 2 elementos iguales
    let aLink254 = document.querySelector("#menu-item-254 a"); // Seleccionar item "Misión Wichí"
    aLink254.appendChild(spanIcono); // Insertar spanIcono dentro del item "Misión Wichí"
    let aLink256 = document.querySelector("#menu-item-256 a"); // Seleccionar item "Hogar de día"
    aLink256.appendChild(spanIcono2); // Insertar spanIcono dentro del item "Hogar de día"
    spanIcono.appendChild(icono);
    spanIcono2.appendChild(icono2);

}
