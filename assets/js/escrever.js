const saida = document.querySelector(".apresentacao__titulo");

function digitacao(texto, contador) {

    if(contador < texto.length){
        setTimeout(() => {

            saida.textContent += texto.charAt(contador);
            contador++;
            digitacao(texto, contador);

        }, 120);
    }
}

digitacao("Vinícius de Vasconcelos Nascimento", 0);