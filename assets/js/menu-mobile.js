function menuShow() {
    
    let menuMobile = document.querySelector('.mobile');
    
    if(menuMobile.classList.contains('open')) {
        
        menuMobile.classList.remove('open');
        menuMobile.classList.add('off');
        document.querySelector('.menu__img').src = "assets/img/menu_white_36dp.svg"

    }else {
       
        menuMobile.classList.add('open');
        menuMobile.classList.remove('off');
        document.querySelector('.menu__img').src = "assets/img/close_white_36dp.svg"

    }
}