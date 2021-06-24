// let icono = window.document.getElementsByClassName("svg-inline--fa")[0];
// console.log(icono)
// icono.setAttribute("data-icon", "caret-down");

function changeIcon() {
    let icono = document.getElementsByClassName("svg-inline--fa");
    icono.dataset.icon = 'caret-down';
}

changeIcon();
