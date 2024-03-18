calculadora = require("./calculadora");
// PARA USAR O PROMPT CASO NÃO FUNCIONE, DEVE DIGITAR NO BASH  DO CMD npm intall prompt-sync
const prompt = require("prompt-sync")();

console.log(
  "1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n5: Potência\n6: Fatorial\n7: Seno\n8: Cosseno\n\nOBS: Lembre-se que as casas decimais devem ser expressas através de ponto(.)\n"
);
const operacao = prompt(
  "Escolha o número correspondente a função que deseja acessar da calculadora: "
);
if (operacao > 0 && operacao < 9) {
  if (operacao == 1) {
    const num1 = parseFloat(prompt("Primeiro numero: "));
    const num2 = parseFloat(prompt("Segundo número: "));
    console.log(calculadora.soma(num1, num2));
  }
  if (operacao == 2) {
    const num1 = parseFloat(prompt("Primeiro numero: "));
    const num2 = parseFloat(prompt("Segundo número: "));
    console.log(calculadora.subtracao(num1, num2));
  }
  if (operacao == 3) {
    const num1 = parseFloat(prompt("Primeiro numero: "));
    const num2 = parseFloat(prompt("Segundo número: "));
    console.log(calculadora.multiplicacao(num1, num2));
  }
  if (operacao == 4) {
    const num1 = parseFloat(prompt("Dividendo: "));
    const num2 = parseFloat(prompt("Divisor: "));
    console.log(calculadora.divisao(num1, num2));
  }
  if (operacao == 5) {
    const num1 = parseFloat(prompt("Valor da base: "));
    const num2 = parseFloat(prompt("Valor do expoente: "));
    console.log(calculadora.potencia(num1, num2));
  }
  if (operacao == 6) {
    const num1 = parseFloat(prompt("Numero que deseja saber o fatorial: "));
    console.log(calculadora.fatorial(num1));
  }
  if (operacao == 7) {
    const num1 = parseFloat(prompt("Número que deseja saber o seno: "));
    console.log(calculadora.seno(num1));
  }
  if (operacao == 8) {
    const num1 = parseFloat(prompt("Número que deseja saber o cosseno: "));
    console.log(calculadora.cosseno(num1));
  }
}
