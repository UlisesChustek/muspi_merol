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


    //
    // Nav Responsive igual al del tema original
    //
    // 1. Creación del elemento toggle Abrir Menú
    const divButton = document.createElement("div");
    divButton.className = "header--row header-top hide-on-desktop layout-full-contained header--row";
    divButton.dataset.rowId = "top";
    divButton.dataset.showOn = "mobile";
    divButton.innerHTML = '<div class="header--row-inner header-top-inner"><div class="container"><div class="row row--wrapper" data-section="hfg_header_layout_top"><div class="builder-item hfg-item-last hfg-item-first col-4 tablet-right mobile-right offset-8"><div class="item--inner builder-item--nav-icon" data-section="header_menu_icon" data-item-id="nav-icon"><div class="menu-mobile-toggle item-button navbar-toggle-wrapper"><button class="navbar-toggle" aria-label="Menú de navegación"><div class="bars"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div><span class="screen-reader-text">Alternar la navegación</span></button></div></div></div></div></div></div>';
    // 2. Creación del elemento que contiene al menú que se desplaza desde la derecha
    const divMenu = document.createElement("div");
    divMenu.id = "header-menu-sidebar";
    divMenu.className = "header-menu-sidebar menu-sidebar-panel slide_right";
    divMenu.innerHTML = '<div id="header-menu-sidebar-bg" class="header-menu-sidebar-bg"><div class="close-sidebar-panel navbar-toggle-wrapper"><button class="navbar-toggle active" aria-label="Menú de navegación"><div class="bars"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div><span class="screen-reader-text">Alternar la navegación</span></button></div><div id="header-menu-sidebar-inner" class="header-menu-sidebar-inner "><div class="builder-item has-nav hfg-item-last hfg-item-first col-12 mobile-center tablet-center desktop-left"><div class="item--inner builder-item--primary-menu has_menu" data-section="header_menu_primary" data-item-id="primary-menu"><div class="nv-nav-wrap"><div role="navigation" class="style-plain nav-menu-primary" aria-label="Menú principal"><ul id="nv-primary-navigation-sidebar" class="primary-menu-ul nav-ul"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-231"><a href="http://localhost/muspi_merol/">Inicio</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-229 current_page_item current_page_parent menu-item-232"><a href="http://localhost/muspi_merol/novedades/" aria-current="page">Novedades</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-254"><a href="http://localhost/muspi_merol/mision-wichi/"><span class="menu-item-title-wrap">Misión Wichí</span><div class="caret-wrap 3" tabindex="0"><span class="caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></span></div></a><ul class="sub-menu" style="right: 100%; left: auto;"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-255"><a href="http://localhost/muspi_merol/mision-wichi/donaciones/">Donaciones</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-501"><a href="http://localhost/muspi_merol/mision-wichi/contacto/">Contacto</a></li></ul></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-256"><a href="http://localhost/muspi_merol/hogar-san-jose/"><span class="menu-item-title-wrap">Hogar de día</span><div class="caret-wrap 6" tabindex="0"><span class="caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></span></div></a><ul class="sub-menu" style="right: 100%; left: auto;"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-273"><a href="https://donaronline.org/hogar-de-dia-san-jose/ayuda-a-sostener-nuestros-talleres-educativos-para-ninos-y-adolescentes?preview=true">Donaciones</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-238"><a href="http://localhost/muspi_merol/hogar-san-jose/contacto/">Contacto</a></li></ul></li></ul</div></div></div></div></div></div>';
    // 3. Creación del elemento "overlay"
    const divOverlay = document.createElement("div");
    divOverlay.className = "header-menu-sidebar-overlay";
    // 2. Seleccionar el header donde será incluido el elemento creado y añadirlo como primer hijo
    let divHeader = document.querySelector("#masthead > div > div.elementor-section-wrap");
    divHeader.insertAdjacentElement("afterbegin", divButton);
    divHeader.appendChild(divMenu); 
    divHeader.appendChild(divOverlay); 
}
