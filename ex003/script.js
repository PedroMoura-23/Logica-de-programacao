/* Condições - IF e ELSE */

var nota1 = 6.5;
var nota2 = 7;
var nota3 = 5;
var nota4 = 9.3;

var media = (nota1 + nota2 + nota3 + nota4) /4;

console.log(`A média do aluno é ${media}`)

var situacao = ''

if (media >= 7) {/* leia "se algo determinado acontecer" */
    situacao = 'Aprovado';
} else if (media <5) {/* leia "senão se" */
    situacao = 'Reprovado';
} else { /* leia "senão" */
    situacao = 'Recuperação'
}

console.log(`O aluno está ${situacao}`)
