function gerarNumero() {
  var operadoras = ['87', '86', '84', '85', '83', '82'];
  var prefixoOperadora = operadoras[Math.floor(Math.random() * operadoras.length)];
  var numeroAleatorio = Math.floor(Math.random() * 10000000).toString().padStart(7, '0'); // Limitado a 7 dígitos
  var numeroCompleto = '+258' + prefixoOperadora + numeroAleatorio;

  return numeroCompleto;
}

function gerarNumeros() {
  var container = document.getElementById('numerosGerados');
  container.textContent = ''; // Limpar números anteriores

  for (var i = 0; i < 150; i++) {
    var numero = gerarNumero();
    container.textContent += 'Número ' + (i + 1) + ': ' + numero + '\n';
  }
}

function copiarNumeros() {
  var container = document.getElementById('numerosGerados');
  var numeros = container.textContent;
  navigator.clipboard.writeText(numeros).then(function() {
    alert('Números copiados para a área de transferência!');
  }, function(err) {
    alert('Erro ao copiar números: ' + err);
  });
}

function baixarCSV() {
  var container = document.getElementById('numerosGerados');
  var linhas = container.textContent.trim().split('\n');
  var csvContent = 'data:text/csv;charset=utf-8,Nome do Objeto,Número\n';
  
  linhas.forEach(function(linha) {
    var partes = linha.split(': ');
    csvContent += partes[0] + ',' + partes[1] + '\n';
  });

  var encodedUri = encodeURI(csvContent);
  var link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'numeros_mocambicanos.csv');
  document.body.appendChild(link);
  
  link.click();
  document.body.removeChild(link);
}
