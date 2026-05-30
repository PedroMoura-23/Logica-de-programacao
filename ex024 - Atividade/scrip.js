function contar(){
    resultado.innerHTML = ""
    let inicio = Number(document.getElementById('inicio').value);
    let fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);
    if(passo == 0){
        resultado.innerHTML += 'O valor do passo não pode ser 0'
    }else if (inicio < fim){
            for(inicio ; inicio <= fim ; inicio += passo) {
                if (inicio + passo > fim){
                    resultado.innerHTML += `${inicio}\u{1F3C1}`;
                } else {
                    resultado.innerHTML += `${inicio}\u{27A1}`;
                } 
            } 
        } else {
            for(inicio ; inicio >= fim ; inicio -= passo) {
                if (inicio - passo < fim){
                    resultado.innerHTML += `${inicio}\u{1F3C1}`;
                } else {
                    resultado.innerHTML += `${inicio}\u{27A1}`;
                } 
            } 
        }
    }