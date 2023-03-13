const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function inverteString(string) {
  // Iverte a string lendo ela de trás pra frente e adicionando em uma nova string vazia
  var stringInversa = "";
  for (var i = string.length - 1; i >= 0; i--) {
    stringInversa += string[i];
  }
  return stringInversa;
}

function controleInput(string) {
  console.log(inverteString(string));
  readline.close();
}

readline.question("Informe uma string? ", controleInput);
