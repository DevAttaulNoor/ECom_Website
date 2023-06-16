// Mobile Side Navbar Process
const slide = document.querySelector(".slide-tab");
const unslide = document.querySelector(".indent");
const nav = document.querySelector(".navbar");

if (slide) {
    slide.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if (unslide) {
    unslide.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}

// Single Product Slider
let mainImg = document.querySelector(".mainImg");
let smallImg = document.querySelectorAll(".smallImg");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}