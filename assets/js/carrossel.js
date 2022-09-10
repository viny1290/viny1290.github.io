const imgs = document.getElementById("mobile");
const imgs2 = document.getElementById("tab");

const img = document.querySelectorAll("#mobile img");
const img2 = document.querySelectorAll("#tab img");

let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length - 1) {

        idx = 0;

    }

    imgs.style.transform = `translateX(${-idx * 20}rem)`;

}

function carrossel2() {
    idx++;

    if(idx > img2.length - 1) {

        idx = 0;

    }

    imgs2.style.transform = `translateX(${-idx * 30}rem)`;

}

setInterval(carrossel, 1500);
setInterval(carrossel2, 2000);