function verificar (){
    let numero1 = Number.parseInt(window.prompt(`Digite um número:`));
    let a = numero1 % 2
if (a == 0 ) {
    document.getElementById('resultado').innerHTML = `O número ${numero1} é par` 
} else {
    document.getElementById('resultado').innerHTML = `O número ${numero1} é ímpar`
}
}