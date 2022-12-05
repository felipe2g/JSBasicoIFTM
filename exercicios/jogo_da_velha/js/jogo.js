// imagens: vetor que ira armazenar os nomes das classes contendo as imagens do círculo e do xix do jogo da velha (essas classes
// estão armazenadas dentro do arquivo jogo.css)
var imagens = ['imgCircle', 'imgXis'];

// imgAtual: ira controlar qual imagem ira aparecer no tabuleiro do jogo da velha (0: circulo e 1: xis)
var imgAtual = 0;

// matriz: ira armazenar o status do jogo (ira conter apenas "0" e "1") em uma matriz de 3x3
var matriz;

//--------------------------------------------------------------------------------------
// matriz vai ter uma estrutura semelhante a essa após executar a função criarMatriz
// matriz = [[,,],[,,],[,,]];
function criarMatriz() {
  matriz = new Array(3);
  for (var i = 0; i < 3; i++)
    matriz[i] = new Array(3);
}

//--------------------------------------------------------------------------------------
// Objetivo: exibir um tabuleiro do jogo da velha no navegador e criar uma matriz que irá armazenar o status inicial do tabuleiro da seguinte forma:
// matriz = [["","",""],["","",""],["","",""]];
function criarTabuleiro() {
  // chama a funcao abaixo para criar a matriz com strings vazia, da seguinte forma
  // matriz = [["","",""],["","",""],["","",""]];
  criarMatriz();
  for (var l = 0; l < 3; l++)
    for (var c = 0; c < 3; c++) {
      var div = document.createElement("div");
      div.setAttribute("class", "boxTabuleiro imgTabuleiro");
      div.setAttribute("id", `${l}_${c}`);
      div.addEventListener("click", inserirImg);
      document.getElementById("tabuleiro").appendChild(div);

      // inicializacao da matriz 3x3 do jogo com string vazia em cada posicao
      matriz[l][c] = "";
    }

  var playerOneName = localStorage.getItem("player1")
  var playerTwoName = localStorage.getItem("player2")

  if (!playerOneName) {
    document.getElementById("playerOneName").innerText = "Jogador 1"
  } else {
    document.getElementById("playerOneName").innerText = playerOneName
  }

  if (!playerTwoName) {
    document.getElementById("playerTwoName").innerText = "Jogador 2"
  } else {
    document.getElementById("playerTwoName").innerText = playerTwoName
  }

  document.getElementById("playerOneName").classList.add("actualPlayer");
}

//--------------------------------------------------------------------------------------
// Inseri uma imagem (X ou 0) em cada casa do tabuleiro ao clicar sobre cada uma dela
function inserirImg(evento) {
  // Atualiza o tabuleiro no navegador com uma imagem de um 0 (circulo) ou de um X (xis)
  document.getElementById(evento.currentTarget.id).classList.add(imagens[imgAtual]);

  // Atualiza a matriz do tabuleiro contendo a representacao do tabuleiro
  // evento.currentTarget.id contém o id de cada casa do tabuleiro. Ex: "0_0" é a casa
  // linha:0 e coluna:0 do tabuleiro
  vetIndices = evento.currentTarget.id.split("_");
  // Armazena na matriz, na mesma posição que foi clicado no tabuleiro, o valor "0" (se for um circulo) ou o valor "1" (se for o Xis)
  matriz[parseInt(vetIndices[0])][parseInt(vetIndices[1])] = String(imgAtual) == 0 ? -1 : 1;

  // Atualiza para a próxima imagem: 0 (circulo) e 1 (xis)
  (imgAtual >= 1) ? imgAtual = 0 : imgAtual++;

  // Sempre que o usuário clicar sobre uma casa do tabuleiro verifica se já houve um ganhador: "000" ou "111"
  var haveWinner = checkGanhador();

  if (haveWinner) {
    console.log("O PLAYER QUE VENCEU FOI => ", haveWinner)
  }

}

function checkGanhador() {

  if (imgAtual == 0) {
    document.getElementById("playerTwoName").classList.remove("actualPlayer");
    document.getElementById("playerOneName").classList.add("actualPlayer");
  } else {
    document.getElementById("playerOneName").classList.remove("actualPlayer");
    document.getElementById("playerTwoName").classList.add("actualPlayer");
  }

  var diagonalPrincipal = 0;
  var diagonalOposta = matriz[2][0] + matriz[1][1] + matriz[0][2]

  for (i = 0; i < 3; i++) {
    var somaLinha = 0;

    diagonalPrincipal += matriz[i][i]

    for (j = 0; j < 3; j++) {
      somaLinha += matriz[i][j]
    }

    if (somaLinha == 3) {
      return 1
    }

    if (somaLinha == -3) {
      return -1
    }
  }

  if (diagonalPrincipal == 3 || diagonalOposta == 3) {
    return 1
  }

  if (diagonalPrincipal == -3 || diagonalOposta == -3) {
    return -1
  }
}

function goToGame() {
  var playerOne = document.getElementById("player1").value
  var playerTwo = document.getElementById("player2").value

  console.log("playerOne, ", playerOne)
  console.log("playerTwo, ", playerTwo)

  if (!playerOne) {
    localStorage.setItem("player1", "Player 1")
  } else {
    localStorage.setItem("player1", playerOne)
  }

  if (!playerTwo) {
    localStorage.setItem("player2", "Player 2")
  } else {
    localStorage.setItem("player2", playerTwo)
  }

  window.location.replace("jogo.html")

}