alert(`Seja bem-vindo ao site!`)
function calculo (){
    let numero1 = Number.parseInt(window.prompt(`Digite um número:`));
    let resultado = document.getElementById('Resultado')
    resultado.innerHTML = (`O dobro do ${numero1} é ${numero1*2} e a metade é ${numero1/2}.`)
}