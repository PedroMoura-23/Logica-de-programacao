/* Operadores */

var a = 5 + 3           // Adição
var b = a % 5           // Resto da divisão
var c = 5 * b ** 2      // Multiplicação e expoente
var d = 10 - a / 2      // Subtração e divisão
var e = 6 * 2 / d       // Multiplicação e divisão
var f = b % e + 4 / e   // resto da divisão, adição e divisão 

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

var g = 100 % 2;
console.log(g);

/* Operador Ternário */
/* ?,; */
var media = 7;
var resultado = media >= 7  ? "Aprovado" :  'Reprovado'
console.log(resultado);