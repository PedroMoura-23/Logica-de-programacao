function verificar(){
    let nasc = document.getElementById('data').value; // menor de idade não pode doar sangue
    let doencaselec = document.querySelector('input[name="sick"]:checked').value;/* essa parte aqui vai fazer o seguinte, ir lá no codigo, e procurar qual das duas bolinhas foi marcada, ´por isso, "input"; o name tem que ser igual ao código, no caso "sick" e "checked" para pegar a marcada, n caso "sim" ou "não" */  
    let peso = Number(document.getElementById('peso').value);
    let tatooselec = document.querySelector('input[name="tatoo"]:checked').value;
    let medicselec = document.querySelector('input[name="medic"]:checked').value;
    let datanasc = new Date(nasc + "T00:00:00"); /* isso aqui é para transformar a variavel nasc que é captada como string, em uma data real, para a gente poder capturar ela. */
    let hoje = new Date();
    let dia = datanasc.getDate();
    let mes = datanasc.getMonth() + 1;
    let idade = hoje.getFullYear() - datanasc.getFullYear();
    if(idade >= 18 && doencaselec == "no" && peso >= 50 && tatooselec == "no" && medicselec == "no"){
        resultado.innerHTML = `Você pode doar Sangue`
    } else {
        resultado.innerHTML = `Infelizmente você não pode doar sangue ainda...`
    }
     
    console.log(idade)
    console.log(`DATA: ${nasc} / DOENÇA: ${doencaselec} / PESO: ${peso} / TATOO: ${tatooselec} / REMEDIO: ${medicselec}`);
}