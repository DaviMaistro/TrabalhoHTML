let pagina = window.location.pathname;

if (pagina.includes("index.html") || pagina === "/") {
    document.getElementById("linkInicio").style.textDecoration = "underline";
    document.getElementById("linkInicio").style.fontWeight = "bold";
}

if (pagina.includes("historicoAcademico.html")) {
    document.getElementById("linkAcademico").style.textDecoration = "underline";
    document.getElementById("linkAcademico").style.fontWeight = "bold";
}

if (pagina.includes("projetosAcademicos.html")) {
    document.getElementById("linkProjetos").style.textDecoration = "underline";
    document.getElementById("linkProjetos").style.fontWeight = "bold";
}

let barraVisivel = true;

function toggleBarra() {
    var barra = document.querySelector('.barra');

    if (barraVisivel == true) {
        barra.classList.add('escondida');
        barraVisivel = false;
    } else {
        barra.classList.remove('escondida');
        barraVisivel = true;
    }
}