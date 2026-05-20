/* Como fazer comentários no código: você pode apertar "Shift + Alt + A", ou apertar "Ctrl + ;" */
var x = 1;/* a maneira de ler corretmente é "Variável x recebe 1" */
let y = 2;
var nome = "Pedro Moura";
const z = 6;
console.log(`O usuário ${nome} tem nota ${(x+y)*z}`);
/* Maneiras de colocar variáveis, voce pode colocar o comando "var", o comando "let" e o comando "const" */

/* a diferença entre elas
var -> funciona dentro e fora da função, é um scoup global
let -> somente funciona dentro da função, mas seu valor pode ser resultado da soma de outros valores,
const -> também funciona somente dentro da função, MAS, é um valor que não muda, sendo uma constante, dentro da função*/

console.log(nome)
console.log(x)
console.log(y)
console.log(z)

var soma = x + y;
var soma2 = z + nome; /* quando eu tenho uma string - Concatenação */

console.log(soma)
console.log(soma2)