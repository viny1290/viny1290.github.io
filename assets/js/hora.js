function mostra(frase) {

    document.querySelector(".apresentacao__hora").innerHTML = frase;

}

var dia = new Date();

var hora = dia.getHours();

if(hora <= 12) {

    mostra("Bom dia,");

}if(hora >= 13 && hora <= 18) {

    mostra("Boa tarde,");

}if(hora >= 19 && hora <= 23) {

    mostra("Boa noite,");

}