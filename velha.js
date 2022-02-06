var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');

mudarJogador('X'); // vai iniciar com x

function escolherQuadrado(id){

    var quadrado = document.getElementById(id);//pega elemento do html

    quadrado.innerHTML = jogador; // modifica tudo dentro da div
    quadrado.style.color = '#000';

}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

