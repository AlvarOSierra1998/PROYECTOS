function ampliar() {
    var img = document.getElementsByClassName("imagenes")[0];
    var lilith = document.getElementsByClassName("imagen__lilith")[0];
    var fondo = document.getElementsByClassName("fondo__Secciones")[0];
    fondo.style.backgroundPosition = "bottom center";
    lilith.style.margin = "auto";
    /* var boton = document.getElementsByClassName("boton__oculto")[0];
    boton.style.display = "block";
    boton.style.position = "relative";
    boton.style.left="60rem"; 
    boton.style.top="8rem";*/
    img.style.width = "100rem";
    img.style.height = "90rem";
    img.style.position = "relative";
    img.style.left = "10rem";
    img.style.marginRight = "5rem";
    img.style.zIndex = "1";
    img.style.transition = ".6s ease-out";

}
function reducir() {
    var imgpe = document.getElementsByClassName("imagenes")[0];
    /*var boton = document.getElementsByClassName("boton__oculto")[0];
        boton.style.display = "none";*/
    imgpe.style.width = "50rem";
    imgpe.style.height = "40rem";
    imgpe.style.marginRight = "2.5rem";
    imgpe.style.marginLeft = "2%";
    imgpe.style.position = "relative";
    imgpe.style.left = "4rem";
    imgpe.style.marginTop = "3rem";
    imgpe.style.display = "grid";
    imgpe.style.zIndex = "1";
    img.style.transition = "all .3s ease-out";
}
function ampliar2() {
    var img = document.getElementsByClassName("imagenes")[1];
    var lilith = document.getElementsByClassName("imagen__lilith ")[0];
    var fondo = document.getElementsByClassName("fondo__Secciones")[0];
    lilith.style.margin = "auto";
    img.style.width = "100rem";
    img.style.height = "90rem";
    img.style.position = "relative";
    img.style.left = "6rem";
    if (img.style.overflow === "hidden") {
        img.style.zIndex = "0";
    }
    img.style.transition = "all .6s ease-out";
}
function reducir2() {
    var imgpe = document.getElementsByClassName("imagenes")[1];

    imgpe.style.width = "50rem";
    imgpe.style.height = "40rem";
    /*imgpe.style.marginRight="-2.5rem";
    img.style.marginLeft="2.5rem";*/
    imgpe.style.marginRight = "2.5rem";
    imgpe.style.marginLeft = "10%";
    imgpe.style.position = "relative";
    imgpe.style.left = "1rem";
    imgpe.style.marginTop = "3rem";
    imgpe.style.display = "grid";
    if (imgpe.style.overflow === "hidden") {
        imgpe.style.zIndex = "0";
    }

    img.style.transition = "all .5ms ease-out";
}
function ampliar3() {
    var img = document.getElementsByClassName("imagenes")[2];
    var lilith = document.getElementsByClassName("imagen__lilith ")[0];
    var fondo = document.getElementsByClassName("fondo__Secciones")[0];

    lilith.style.margin = "auto";
    img.style.width = "100rem";
    img.style.height = "90rem";
    img.style.position = "relative";
    img.style.left = "10rem";
    if (img.style.overflow === "hidden") {
        img.style.zIndex = "0";
    }
    img.style.transition = "all .6s ease-out";
}
function reducir3() {
    var imgpe = document.getElementsByClassName("imagenes")[2];
    imgpe.style.width = "50rem";
    imgpe.style.height = "40rem";

    /* imgpe.style.marginRight="-2.5rem";
    img.style.marginLeft="2.5rem";*/
    imgpe.style.marginRight = "2.5rem";
    imgpe.style.marginLeft = "10%";

    imgpe.style.position = "relative";
    imgpe.style.left = "1rem";
    imgpe.style.marginTop = "3rem";
    imgpe.style.display = "grid";
    if (imgpe.style.overflow === "hidden") {
        imgpe.style.zIndex = "0";
    }

    img.style.transition = "all .5ms ease-out";
}
function ampliar4() {
    var img = document.getElementsByClassName("imagenes")[3];
    var lilith = document.getElementsByClassName("imagen__lilith ")[0];
    var fondo = document.getElementsByClassName("fondo__Secciones")[0];

    lilith.style.margin = "auto";
    img.style.width = "100rem";
    img.style.height = "90rem";
    img.style.position = "relative";
    img.style.left = "10rem";
    img.style.marginLeft = "5%"
    img.style.cursor = "pointer";
    if (img.style.overflow === "hidden") {
        img.style.zIndex = "0";
    }
    img.style.transition = "all .6s ease-out";
}
function reducir4() {
    var imgpe = document.getElementsByClassName("imagenes")[3];
    imgpe.style.width = "50rem";
    imgpe.style.height = "40rem";
    /*
    imgpe.style.marginRight="-2.5rem";
    imgpe.style.marginLeft="2.5rem";*/
    imgpe.style.marginRight = "2.5rem";
    imgpe.style.marginLeft = "10%";

    imgpe.style.position = "relative";
    imgpe.style.left = "1rem";
    imgpe.style.float = "left";
    imgpe.style.marginTop = "3rem";
    imgpe.style.display = "grid";
    if (imgpe.style.overflow === "hidden") {
        imgpe.style.zIndex = "0";
    }
    img.style.transition = "all .5ms ease-out";
}
function BorderMouse() {
    var imagen_borde = document.getElementsByClassName("imagenes")[0];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouseOut() {
    var imagen_borde = document.getElementsByClassName("imagenes")[0];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";

}
function BorderMouse2() {
    var imagen_borde = document.getElementsByClassName("imagenes")[1];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease";


}
function BorderMouseOut2() {
    var imagen_borde = document.getElementsByClassName("imagenes")[1];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouse3() {
    var imagen_borde = document.getElementsByClassName("imagenes")[2];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouseOut3() {
    var imagen_borde = document.getElementsByClassName("imagenes")[2];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouse4() {
    var imagen_borde = document.getElementsByClassName("imagenes")[3];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouseOut4() {
    var imagen_borde = document.getElementsByClassName("imagenes")[3];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouse5() {
    var imagen_borde = document.getElementsByClassName("imagenes")[4];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouseOut5() {
    var imagen_borde = document.getElementsByClassName("imagenes")[4];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouse6() {
    var imagen_borde = document.getElementsByClassName("imagenes")[5];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouseOut6() {
    var imagen_borde = document.getElementsByClassName("imagenes")[5];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouse7() {
    var imagen_borde = document.getElementsByClassName("imagenes")[6];
    imagen_borde.style.border = "3px solid var(--rojo)";
    imagen_borde.style.boxShadow = "0 0 40px var(--rojo)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}
function BorderMouseOut7() {
    var imagen_borde = document.getElementsByClassName("imagenes")[6];
    imagen_borde.style.border = "2px solid var(--negro)";
    imagen_borde.style.boxShadow = "0 0 40px var(--negro)";
    imagen_borde.style.transition = "all .5s ease-in-out";
}

window.addEventListener('load', () => {

    // create the parent element <div id="modal">
    let modal = document.createElement("div");
    modal.setAttribute('id', 'modal');
    modal.setAttribute('class', 'modal');

    // create the child element <div id="modalClose">
    let modalClose = document.createElement('div');
    modalClose.setAttribute('id', 'modalClose');
    modalClose.innerHTML = "&times;";

    // create the child element <img>
    let modalImg = document.createElement('img');
    modalImg.setAttribute('id', 'modalImg');

    // create the child element <div id="modalText"
    let modalText = document.createElement('div');
    modalText.setAttribute('id', 'modalText');


    // open node elements
    document.body.append(modal);
    modal.appendChild(modalClose);
    modal.appendChild(modalImg);
    modal.appendChild(modalText);
    // find all elements with class modalImg
    let imgList = document.querySelectorAll(".modalImg"),
        i
    for (const img of imgList) {
        // add event click to show modal and add src attribute
        img.addEventListener('click', () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
            modalText.innerHTML = img.alt;
            modalImg.style.width = "auto";
            modalImg.style.height = "auto";
            modalImg.style.border = " solid #424242 3px";
        });
        
    }
    
    // event, hide modal if user click modalClose "x"
    modalClose.addEventListener("click", function () {
        modal.style.display = "none";
    })
    // event, hide modal if user click on the modal 
    modal.addEventListener("click", function () {
        modal.style.display = "none";
    })
})