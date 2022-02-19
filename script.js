

var inputAdultos = document.getElementById("inputAdultos")
var inputCriancas = document.getElementById("inputCriancas")
var inputDuracao = document.getElementById("inputDuracao")
var calCarne = 0
var calCerveja = 0
var calBebida = 0

function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    calCarne = (((adultos * qtdCarne(duracao)) + (criancas * qtdCarne(duracao) / 2)) / 1000).toFixed(1)
    calCerveja = Math.ceil(adultos * qtdCerveja(duracao))
    calBebida = Math.ceil((adultos * qtdBebida(duracao)) + (criancas * qtdBebida(duracao) / 2))

    document.getElementById("carne").innerHTML = calCarne
    document.getElementById("carne").innerHTML = calCarne + " Kg de Carne"
    document.getElementById("cerveja").innerHTML = calCerveja + " Latas de Cerveja (350ml)"
    document.getElementById("bebidas").innerHTML = calBebida + " Garrafas de bebida (1L)"
    duracao > 0 ? document.getElementById("resultado").style.display = "inline" : document.getElementById("resultado").style.display = "none"
}

function qtdCarne(duracao) {
   return duracao >= 6 ? 700 : 500
}

function qtdCerveja(duracao) {
    return duracao >= 6 ? 6 : 4
}

function qtdBebida(duracao) {
    return duracao > 6 ? 1.5 : 1
}


