function mostrarFormJogador1() {
    var jogador1Nome = document.getElementById('jogador1Input').value;
    var jogador2Nome = document.getElementById('jogador2Input').value;

    var nomesForm = document.getElementById('nomesForm');
    var jogador1Form = document.getElementById('jogador1Form');
    
    document.getElementById('nomeJogador1').textContent = jogador1Nome;
    document.getElementById('nomeJogador2').textContent = jogador2Nome;
    
    nomesForm.classList.add('hidden');
    jogador1Form.classList.remove('hidden');
  }

  function mostrarFormJogador2() {
    var jogador1Nome = document.getElementById('jogador1Input').value;

    var jogador1Form = document.getElementById('jogador1Form');
    var jogador2Form = document.getElementById('jogador2Form');
    var escolhaJogador1 = document.getElementById('escolhaJogador1').value;

    if (escolhaJogador1 === "") {
      alert(jogador1Nome + ' deve escolher Par ou Ímpar antes de prosseguir.');
      return;
    }

    jogador1Form.classList.add('hidden');
    jogador2Form.classList.remove('hidden');
  }

  function calcularResultado() {
    var jogador1Nome = document.getElementById('jogador1Input').value;
    var jogador2Nome = document.getElementById('jogador2Input').value;
    var escolha1 = document.getElementById('escolhaJogador1').value;
    var numero1 = document.getElementById('numeroJogador1').value.replace(/./g, '*');
    var numero2 = document.getElementById('numeroJogador2').value.replace(/./g, '*');

    var soma = parseInt(document.getElementById('numeroJogador1').value) + parseInt(document.getElementById('numeroJogador2').value);
    var resultado = soma % 2 === 0 ? 'par' : 'ímpar';

    var vencedor;
    if (escolha1 === resultado) {
      vencedor = jogador1Nome;
    } else {
      vencedor = jogador2Nome;
    }

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = 'O vencedor é: ' + vencedor + '\nSoma dos números: ' + soma;

    var jogador2Form = document.getElementById('jogador2Form');
    var voltarInicioButton = document.getElementById('voltarInicio');

    resultadoDiv.classList.remove('hidden');
    jogador2Form.classList.add('hidden');
    voltarInicioButton.classList.remove('hidden');
  }

  function voltarInicio() {
    var nomesForm = document.getElementById('nomesForm');
    var resultadoDiv = document.getElementById('resultado');
    var voltarInicioButton = document.getElementById('voltarInicio');

    nomesForm.classList.remove('hidden');
    resultadoDiv.classList.add('hidden');
    voltarInicioButton.classList.add('hidden');

    // Limpar valores dos inputs ao voltar ao início
    document.getElementById('jogador1Input').value = '';
    document.getElementById('jogador2Input').value = '';
    document.getElementById('numeroJogador1').value = '';
    document.getElementById('numeroJogador2').value = '';
  }