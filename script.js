let prueba = document.getElementById("btn-votar");
let body = document.querySelector("body");
prueba.addEventListener("click", ()=> {
    body.setAttribute("style", "background-size: 200%");
    let circulo = document.getElementById("circulo");
    circulo.setAttribute("style", "top: -9rem;left: -8rem;");
})

