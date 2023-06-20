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
let prodquant = document.getElementById("quantity-value").innerText;
let change = document.getElementById('quantity-value')
let plus = document.querySelector(".fa-plus");
let minus = document.querySelector(".fa-minus");

function check_quant() {
    if (prodquant <= 1) {
        minus.removeEventListener('click', minus_quant);
    }

    else {
        minus.addEventListener('click', minus_quant)
    }
}

function plus_quant() {
    prodquant = parseInt(prodquant) + 1;
    check_quant();
    change.textContent = prodquant
    console.log(prodquant);
}

function minus_quant() {
    prodquant = parseInt(prodquant) - 1;
    check_quant();
    change.textContent = prodquant
    console.log(prodquant);
}

if (plus) {
    plus.addEventListener('click', plus_quant);
    prodquant.innerText = prodquant
}

if (minus) {
    check_quant();
    prodquant.innerText = prodquant
}


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

// Adding to cart
// let cart = document.querySelectorAll(".prod .cart i")
// let prodImg = document.querySelectorAll(".prod img")
// let prodNam = document.querySelectorAll(".prod .description h5").value
// let prodPrice = document.querySelectorAll(".prod .description h4").value
// let cartProdImg = document.getElementById('cart-prod-img')
// let cartProdNam = document.getElementById('cart-prod-name').value
// let cartProdPrice = document.getElementById('cart-prod-price').value

// if(cart){
//     cart.addEventListener('click', ()=>{
//         cartProdImg.src = prodImg.src;
//         cartProdNam = prodNam;
//         cartProdPrice = prodPrice;
//         console.log(cartProdImg)
//         console.log(cartProdNam)
//         console.log(cartProdPrice)
//     })
// }

// let cart = document.querySelector(".prod .cart i");
// let prodImg = document.querySelectorAll(".prod img");
// let prodNam = document.querySelectorAll(".prod .description h5").textContent;
// let prodPrice = document.querySelectorAll(".prod .description h4").textContent;
// let cartProdImg = document.getElementById('cart-prod-img');
// let cartProdNam = document.getElementById('cart-prod-name');
// let cartProdPrice = document.getElementById('cart-prod-price');

// if (cart) {
//     cart.addEventListener('click', () => {
//         cartProdImg.src = prodImg.src;
//         cartProdNam.textContent = prodNam;
//         cartProdPrice.textContent = prodPrice;
//         console.log(cartProdImg);
//         console.log(cartProdNam);
//         console.log(cartProdPrice);
//     });
// }

let cart = document.getElementById('cart-btn');
let prodNam = document.querySelector('prod description h5').innerText
let cartProdNam = document.getElementById('cart-prod-name').innerText;
let cartProdNamPlace = document.getElementById('cart-prod-name');

if (cart) {
    cart.addEventListener('click', () => {
        console.log("Clicked")

        cartProdNam == prodNam
        cartProdNamPlace.textContent = cartProdNam
        console.log(cartProdNam)

        // cartProdImg.src = prodImg.src;
        // cartProdNam.textContent = prodNam;
        // cartProdPrice.textContent = prodPrice;
        // console.log(cartProdImg);
        // console.log(cartProdNam);
        // console.log(cartProdPrice);
    });
}
