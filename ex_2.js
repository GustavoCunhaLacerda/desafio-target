const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pertenceAFibonacci(numero) {
  // Um número "N" pertence a série de Fibonacci apenas se E1 = (5*<N>^2+4) ou E2 = (5*<N>^2-4)  for um quadrado perfeito,
  // logo, se existir um A1 'INTEIRO' tal que A1*A1 = (5*<N>^2+4) ou 
  // se existir um A2 'INTEIRO' tal que A2*A2 = (5*<N>^2-4)

  const E1 = (5 * (numero ** 2)) + 4; // E1 = (5*<N>^2+4)
  const A1 = Math.sqrt(E1);           // A1 = RaizQuadrada(E1) 
  const E2 = (5 * (numero ** 2)) - 4; // E2 = (5*<N>^2-4)
  const A2 = Math.sqrt(E2);           // A2 = RaizQuadrada(E2) 



  return Number.isInteger(A1) || Number.isInteger(A2)    // true se A1 || A2 é inteiro, false se não
}

function controleInput(numero) {
  pertenceAFibonacci(numero)
    ? console.log("O número pertence a Fibonacci")
    : console.log("O número NÃO pertence a Fibonacci");
  readline.close();
}

readline.question("Informe um número? ", controleInput);
