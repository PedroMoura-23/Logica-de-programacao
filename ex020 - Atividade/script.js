function verificar() {
    let num1 = Number(document.getElementById('numero1').value);
    let num2 = Number(document.getElementById('numero2').value);
    let num3 = Number(document.getElementById('numero3').value);
    if(num1 == num2 && num1 == num3){
    resultado.innerHTML = `Os números são iguais`
    } else if (num1 >= num2 && num1 > num3){
        resultado.innerHTML = `O maior número é ${num1}.`
    } else if (num1 < num2 && num2 >= num3){
        resultado.innerHTML = `O maior número é ${num2}.`
    } else {
        resultado.innerHTML = `O maior número é ${num3}.`
    }
}