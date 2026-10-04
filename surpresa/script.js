console.log("O Java ta funcionando");
function abrirSurpresa() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("surpresa").style.display = "block";
    document.getElementById("surpresa").style.opacity = "1";
    
}

function contador() {

    let inicio = new Date("2026-03-29");

    let agora = new Date();

    let dias = (agora - inicio) / 1000 / 60 / 60 / 24;

    let restante = dias % 1;

    let horas = Math.floor(restante * 24);

    let minutos = Math.floor(restante * 60) % 60;

    let restanteHoras = (restante * 24) - horas;

    let segundos = Math.floor((restanteHoras * 60 % 1) * 60);

    document.getElementById("contador").innerText =
        Math.floor(dias) + " dias, " +
        horas + " horas, " +
        minutos + " minutos e " +
        segundos + " segundos";

}

setInterval(contador, 1000);


function tocarVideo() {
    const video = document.querySelector(".video-container video");
    const capa = document.querySelector(".video-capa");

    video.play();

    capa.style.opacity = "0";

    setTimeout(() => {
        capa.style.display = "none";
    }, 800);
}

const capitulos = document.querySelectorAll(".capitulo");

function mostrarCapitulos() {

    capitulos.forEach(function(capitulo) {

        const posicao = capitulo.getBoundingClientRect().top;

        if (posicao < window.innerHeight - 100) {
            capitulo.classList.add("visivel");
        }

    });

}

window.addEventListener("scroll", mostrarCapitulos);
mostrarCapitulos();