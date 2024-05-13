// Função para mostrar o formulário do jogador 1 e esconder o formulário de nomes
function mostrarFormJogador1() {
  // Obter os nomes dos jogadores dos inputs
  var jogador1Nome = document.getElementById('jogador1Input').value;
  var jogador2Nome = document.getElementById('jogador2Input').value;

  // Obter elementos do DOM
  var nomesForm = document.getElementById('nomesForm');
  var jogador1Form = document.getElementById('jogador1Form');
  
  // Definir os nomes dos jogadores nos elementos de exibição
  document.getElementById('nomeJogador1').textContent = jogador1Nome;
  document.getElementById('nomeJogador2').textContent = jogador2Nome;
  
  // Esconder o formulário de nomes e mostrar o formulário do jogador 1
  nomesForm.classList.add('hidden');
  jogador1Form.classList.remove('hidden');
}

// Função para mostrar o formulário do jogador 2 e esconder o formulário do jogador 1
function mostrarFormJogador2() {
  var jogador1Nome = document.getElementById('jogador1Input').value;

  // Obter elementos do DOM
  var jogador1Form = document.getElementById('jogador1Form');
  var jogador2Form = document.getElementById('jogador2Form');
  var escolhaJogador1 = document.getElementById('escolhaJogador1').value;

  // Verificar se o jogador 1 escolheu Par ou Ímpar
  if (escolhaJogador1 === "") {
      alert(jogador1Nome + ' deve escolher Par ou Ímpar antes de prosseguir.');
      return;
  }

  // Esconder o formulário do jogador 1 e mostrar o formulário do jogador 2
  jogador1Form.classList.add('hidden');
  jogador2Form.classList.remove('hidden');
}

// Função para calcular o resultado do jogo
function calcularResultado() {
  var jogador1Nome = document.getElementById('jogador1Input').value;
  var jogador2Nome = document.getElementById('jogador2Input').value;
  var escolha1 = document.getElementById('escolhaJogador1').value;
  var numero1 = document.getElementById('numeroJogador1').value.replace(/./g, '*');
  var numero2 = document.getElementById('numeroJogador2').value.replace(/./g, '*');

  // Calcular a soma dos números fornecidos pelos jogadores
  var soma = parseInt(document.getElementById('numeroJogador1').value) + parseInt(document.getElementById('numeroJogador2').value);
  // Determinar se a soma é par ou ímpar
  var resultado = soma % 2 === 0 ? 'par' : 'ímpar';

  var vencedor;
  // Determinar o vencedor com base na escolha do jogador 1
  if (escolha1 === resultado) {
      vencedor = jogador1Nome;
  } else {
      vencedor = jogador2Nome;
  }

  // Exibir o vencedor e a soma dos números
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerText = 'O vencedor é: ' + vencedor + '\nSoma dos números: ' + soma;
  document.getElementById("img").innerHTML = "<img src='img/Trofeu pixel art.png' width='258'> ";

  // Esconder o formulário do jogador 2 e mostrar o botão "Voltar ao Início"
  var jogador2Form = document.getElementById('jogador2Form');
  var voltarInicioButton = document.getElementById('voltarInicio');

  resultadoDiv.classList.remove('hidden');
  jogador2Form.classList.add('hidden');
  voltarInicioButton.classList.remove('hidden');
}

// Função para voltar ao início do jogo, reexibindo o formulário de nomes
function voltarInicio() {
  var nomesForm = document.getElementById('nomesForm');
  var resultadoDiv = document.getElementById('resultado');
  var voltarInicioButton = document.getElementById('voltarInicio');
  document.getElementById("img").innerHTML = "";

  // Reexibir o formulário de nomes e ocultar o resultado e o botão "Voltar ao Início"
  nomesForm.classList.remove('hidden');
  resultadoDiv.classList.add('hidden');
  voltarInicioButton.classList.add('hidden');

  // Limpar valores dos inputs ao voltar ao início
  document.getElementById('jogador1Input').value = '';
  document.getElementById('jogador2Input').value = '';
  document.getElementById('numeroJogador1').value = '';
  document.getElementById('numeroJogador2').value = '';
}
