function gerar(){
        let num = Number(document.getElementById('number').value)
        resultado.innerHTML = `Tabuada de <strong>${num}</strong><br>`
        for(let cont = 0; cont <=10; cont++){
        resultado.innerHTML += `${num} x ${cont} = <strong>${cont * num}</strong><br>`;
    }
}