const Imagem = document.getElementById("aviao-cabecalho");
const musica = document.getElementById("musica");

        Imagem.addEventListener("click", () => {
        if (musica.paused) {
            musica.play(); 
        } else {
            musica.pause(); 
        }
        });