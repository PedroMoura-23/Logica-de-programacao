var numero_1 = 6
var numero_2 = 10
var numero_3 = 6

if (numero_1 == numero_2 && numero_1 == numero_3){
    console.log(`Todos os números são iguais a ${numero_1}`)
} else if (numero_1 > numero_2 && numero_1 > numero_3) {
    console.log(`O maior numero é ${numero_1}`)
} else if (numero_1 < numero_2 && numero_2 > numero_3) {
     console.log(`O maior numero é ${numero_2}`)
} else if (numero_1 == numero_2 && numero_1 > numero_3){
    console.log(`O maior numero é ${numero_1}, presentes nas variáveis numero_1 e numero_2`)
} else if (numero_1 < numero_2 && numero_2 == numero_3){
    console.log(`O maior numero é ${numero_2}, presentes nas variáveis numero_2 e numero_3`)
} else if (numero_1 > numero_2 && numero_1 == numero_3){
    console.log(`O maior numero é ${numero_1}, presentes nas variáveis numero_1 e numero_3`)
} 



else {
    console.log(`O maior número é ${numero_3}`)
}