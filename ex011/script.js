var area = document.getElementById('div1')

function clicar(){/* eu coloquei "function" e depois o nome dela, e tipo, o nome dela tem que ser exatamente o mesmo que está dentro do onclick no html */
    area.innerHTML = 'Clicou aqui ein pae'
    area.style.background = 'green'
}

function entrar() {
    area.innerHTML = 'Entrou! (Lá ele)'
    area.style.background = 'gold'
}

function sair() {
    area.innerHTML = 'Saiu daqui por quê mermo?!'
    area.style.background = 'red'
}