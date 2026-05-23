function somar(){
    let num1 = Number(document.getElementById('aNum1').value)
    let num2 = Number(document.getElementById('aNum2').value)
    let soma = num1 + num2
    let resultado = document.getElementById('aResultado')
    resultado.innerHTML = soma
}
function subtrair(){
    let num1 = Number(document.getElementById('sNum1').value)
    let num2 = Number(document.getElementById('sNum2').value)
    let subtrair = num1 - num2
    let resultado = document.getElementById('sResultado')
    resultado.innerHTML = subtrair
}