const botao1 = document.getElementById("sobre--botao1")
const botao2 = document.getElementById("sobre--botao2")

const conteudo1 = document.getElementById("sobre--conteudo1")
const conteudo2 = document.getElementById("sobre--conteudo2")



function conteudo1Aparece() {
    
    conteudo1.classList.remove('conteudo__desativado')
    conteudo1.classList.add('conteudo__ativo')
    conteudo2.classList.remove('conteudo__ativo')
    conteudo2.classList.add('conteudo__desativado')

}

function conteudo2Aparece() {
    
    conteudo1.classList.remove('conteudo__ativo')
    conteudo1.classList.add('conteudo__desativado')
    conteudo2.classList.remove('conteudo__desativado')
    conteudo2.classList.add('conteudo__ativo')

}

function botao1Desativado() {

    botao1.classList.remove('botao__ativo')
    botao1.classList.add('botao__desativado')

}

function botao2Desativado() {

    botao2.classList.remove('botao__ativo')
    botao2.classList.add('botao__desativado')
    
}

function botao2Ativado() {

    botao2.classList.add('botao__ativo')
    botao2.classList.remove('botao__desativado')
    botao1Desativado()
    conteudo2Aparece()
    return

}

function botao1Ativado() {

    botao1.classList.add('botao__ativo')
    botao1.classList.remove('botao__desativado')
    botao2Desativado()
    conteudo1Aparece()

    return

}

botao1.addEventListener("click", botao1Ativado)
botao2.addEventListener("click", botao2Ativado)