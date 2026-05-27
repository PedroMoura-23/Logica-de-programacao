function calcular(){
    let nome = window.prompt('Digite seu Nome')
    let nota1 = Number.parseInt(window.prompt(`Qual foi sua primeira nota ${nome}?`));
    console.log(nota1)
    let nota2 = Number.parseInt(window.prompt(`Além de ${nota1}, qual foi sua segunda nota ${nome}?`));
    let media = (nota1 + nota2)/2
    resultado.innerHTML = `<p>Calculando a média final de <span id = nome>${nome}</span></p>`;
    
    resultado.innerHTML += `<p>As notas obtidas foram <span id = nota1>${nota1}</span> e <span id = nota2>${nota2}</span></p>`;
    
    resultado.innerHTML += `<p>A média final é <span id=media>${media}</span></p>`;
    if(media >= 7){
        resultado.innerHTML += `<p>O aluno ${nome} foi <span id = "aprovado" >Aprovado</span></p>`;
    document.getElementById('aprovado').style.backgroundColor = 'green'; 
    document.getElementById('aprovado').style.color = 'white';
    } else if (media < 7 && media >= 5){
        resultado.innerHTML += `<p>O aluno ${nome} está de <span id = "recuperacao">Recuperação</span></p>`;
        document.getElementById('recuperacao').style.backgroundColor = 'orange'; 
        document.getElementById('recuperacao').style.color = 'white';  
    } else {
        resultado.innerHTML += `<p>O aluno ${nome} foi <span id = "reprovado">Reprovado</span></p>`;
        document.getElementById('reprovado').style.backgroundColor = 'red'; 
        document.getElementById('reprovado').style.color = 'white';
    }
    document.getElementById('nome').style.backgroundColor = 'yellow';
    document.getElementById('nota1').style.backgroundColor = 'yellow';
    document.getElementById('nota2').style.backgroundColor = 'yellow';
    document.getElementById('media').style.backgroundColor = 'yellow';
}