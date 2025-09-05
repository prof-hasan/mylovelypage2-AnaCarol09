function animarElemento(img, velocidade, limiteCima, limiteBaixo, direcaoInicial) {
  let posicaoY = 0;
  let direcao = direcaoInicial; // pode ser -1 (subindo) ou 1 (descendo)

  setInterval(() => {
    posicaoY += velocidade * direcao;

    img.style.position = 'relative';
    img.style.top = posicaoY + 'px';

    // Bateu no topo → começa a descer
    if (posicaoY <= -limiteCima) {
      direcao = 1;
    }

    // Bateu no fundo → começa a subir
    if (posicaoY >= limiteBaixo) {
      direcao = -1;
    }
  }, 50);
}

// Pega os elementos
const r1 = document.getElementById('rosinhas1');
const r2 = document.getElementById('rosinhas2');
const r3 = document.getElementById('rosinhas3');
const r4 = document.getElementById('rosinhas4');
const r5 = document.getElementById('rosinhas5');
const r6 = document.getElementById('rosinhas6');

// Aqui é você definido quem começa subindo (-1) ou descendo (1)
animarElemento(r1, 5, 1090, 32, -1); // sobe primeiro
animarElemento(r2, 3, 1090, 32,  1); // desce primeiro
animarElemento(r3, 4, 1090, 32, -1); // sobe primeiro
animarElemento(r4, 4, 1090, 32, -1); // sobe primeiro
animarElemento(r5, 3, 1090, 32,  1); // desce primeiro
animarElemento(r6, 5, 1090, 32, -1); // sobe primeiro