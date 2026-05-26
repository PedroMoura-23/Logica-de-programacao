function verificar(){
    let vel1 = Number(document.getElementById('velocidade').value)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Sua velocidade atual é <strong>${vel1}</strong> km/h</p>`;
if(vel1 >= 80){
    resultado.innerHTML += `<p>Você ultrapassou o limite de velocidade. <span id= "multa">Vai receber uma MULTA, seu safado.</span> </p>`
} else{
    resultado.innerHTML += `<p>Você está dentro do limite de velocidade, boa viagem garoto!</p>`
}
    resultado.innerHTML += `<p>Use sempre o cinto de segurança!</p>`;
document.getElementById('multa').style.color = 'red' /* essa instrução faz a cor do texto dentro das aspas, que foi identificada em cima, ou em outra pá */
}