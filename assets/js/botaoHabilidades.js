function iconHab() {
    let lista = document.querySelector('.habilidades__list');

    if (lista.classList.contains('open')) {

        lista.classList.remove('open');
        lista.classList.add('off');

    }else {

        lista.classList.remove('off');
        lista.classList.add('open');

    }
}