"use strict";

const soma = function (a, b) {
  return a + b;
};

const subtracao = function (a, b) {
  return a - b;
};

const multiplicacao = function (a, b) {
  return a * b;
};

const divisao = function (a, b) {
  return a / b;
};
const potencia = function (a, b) {
  return a ** b;
};
const fatorial = function (a) {
  let fator = 1;
  for (let i = 2; i <= a; i++) {
    fator = fator * i;
  }
  return fator;
};
const seno = function (a) {
  return Math.sin(a);
};
const cosseno = function (a) {
  return Math.cos(a);
};

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  potencia,
  fatorial,
  seno,
  cosseno,
};
