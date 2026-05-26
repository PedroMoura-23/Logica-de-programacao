function calcular(){
    let nome = window.prompt('Digite seu Nome')
    let nota1 = Number.parseInt(window.prompt(`Qual foi sua primeira nota ${nome}?`));
    console.log(nota1)
    let nota2 = Number.parseInt(window.prompt(`Além de ${nota1}, qual foi sua segunda nota ${nome}?`));
    let media = (nota1 + nota2)/2
    resultado.innerHTML = `<p>Calculando a média final de ${nome}</p>`;
    
    resultado.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`;
    
    resultado.innerHTML += `<p>A média final é ${media}</p>`;
    if(media >= 7){
        resultado.innerHTML += `<p>O aluno ${nome} foi <span id = "aprovado" >Aprovado</span></p>`;
    } else if (media < 7 && media >= 5){
        resultado.innerHTML += `<p>O aluno ${nome} está de <span id = "reprovado">Recuperação</span></p>`;
    } else {
        resultado.innerHTML += `<p>O aluno ${nome} foi <span id = "recuperacao">Reprovado</span></p>`;
    }
    
    document.getElementById('aprovado').style.backgroundColor = 'green'; 
    document.getElementById('aprovado').style.color = 'white';
    document.getElementById('reprovado').style.backgroundColor = 'red'; 
    document.getElementById('reprovado').style.color = 'white';
    document.getElementById('recuperacao').style.backgroundColor = 'orange'; 
    document.getElementById('recuperacao').style.color = 'white';  
}