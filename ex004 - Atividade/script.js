var idade = 70
//Menores de 16 não votam
//Entre 16 e 18 voto opicional
//Maiores de 18 voto obrigatório
//Acima de 70 voto opcional

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 70) {
    console.log ('Voto opcional') 
} else {
    console.log('Voto obrigatório') 
}

