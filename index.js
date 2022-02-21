function valor(tecla){
    document.getElementById('resultado').innerHTML += tecla

}

function limpar(limp){
    document.getElementById('resultado').innerHTML = ''
}

function apagar(apagado){
    var back = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = back.substring(0, back.length -1)
}

function calcular(calculado){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else{
        document.getElementById('resultado').innerHTML = ('vazio')
    }
}
