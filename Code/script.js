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


// Quantity Increase of the Product
// let prodquant = document.getElementById("quantity-value").value;
// let plus = document.querySelector(".fa-plus");
// let minus = document.querySelector(".fa-minus");

// function check_quant() {
//     if (prodquant <= 1) {
//         minus.removeEventListener('click', minus_quant);
//     }

//     else {
//         minus.addEventListener('click', minus_quant)
//     }
// }

// function plus_quant() {
//     prodquant = parseInt(prodquant) + 1;
//     check_quant();
//     console.log(prodquant);
// }

// function minus_quant() {
//     prodquant = parseInt(prodquant) - 1;
//     check_quant();
//     console.log(prodquant);
// }

// if (plus) {
//     plus.addEventListener('click', plus_quant);
// }

// if (minus) {
//     check_quant();
// }

let prodquant = parseInt(document.getElementById("quantity-value").innerHTML);
let plus = document.querySelector(".fa-plus");
let minus = document.querySelector(".fa-minus");

function check_quant() {
    if (prodquant <= 1) {
        minus.removeEventListener('click', minus_quant);
    } else {
        minus.addEventListener('click', minus_quant);
    }
}

function updateQuantityDisplay() {
    document.getElementById("quantity-value").innerHTML = prodquant;
}

function plus_quant() {
    prodquant = parseInt(prodquant) + 1;
    check_quant();
    updateQuantityDisplay();
    console.log(prodquant);
}

function minus_quant() {
    prodquant = parseInt(prodquant) - 1;
    check_quant();
    updateQuantityDisplay();
    console.log(prodquant);
}

if (plus) {
    plus.addEventListener('click', plus_quant);
}

if (minus) {
    check_quant();
}

updateQuantityDisplay();


// Quantity Increase of the Product
let options = document.querySelectorAll(".size option");

if (options) {
  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      // Deselect all other options
      options.forEach((otherOption) => {
        if (otherOption !== event.target) {
          otherOption.style.color = '';
          otherOption.style.fontWeight = '500';
          otherOption.classList.remove('selected');
        }
      });

      if (event.target.classList.contains('selected')) {
        // Option has already been selected, revert changes
        event.target.style.color = '';
        event.target.style.fontWeight = '500';
        event.target.classList.remove('selected');
        console.log("Unclicked option");
      } else {
        // Option has not been selected, apply changes
        event.target.style.color = '#088178';
        event.target.style.fontWeight = '700';
        event.target.classList.add('selected');
        console.log("Clicked on option");
      }
    });
  });
}