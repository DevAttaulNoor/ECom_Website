// Mobile Side Navbar Process
const nav_slide = document.querySelector(".nav-slide");
const nav_unslide = document.querySelector(".indent");
const nav = document.querySelector(".navbar");

if (nav_slide) {
    nav_slide.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if (nav_unslide) {
    nav_unslide.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}


// Mobile Side Navbar Process
const cart_slide = document.querySelector("#cart-slide-open");
const cart_unslide = document.querySelector("#cart-slide-close");
const cart = document.querySelector(".cart-slide");

if (cart_slide) {
    cart_slide.addEventListener('click', () => {
        console.log("Cart slide")
        cart.classList.add("cart-active");
    })
}

if (cart_unslide) {
    cart_unslide.addEventListener('click', () => {
        console.log("Cart unslide")
        cart.classList.remove("cart-active");
    })
}

let addTocart = document.querySelectorAll('.prod .cart');
let prodname = document.querySelectorAll('.description h5');
let prodprice = document.querySelectorAll('.description h4');
let prodimg = document.querySelectorAll('.prod img');
let cartprodname = document.querySelector('#cart-prod-name');
let cartprodprice = document.querySelector('#cart-prod-price');
let cartprodimg = document.querySelector('.items img');

prodname.forEach(function(element) {
  console.log(element.innerHTML);
});

prodprice.forEach(function(element) {
  console.log(element.innerHTML);
});

console.log(cartprodname.innerHTML);
console.log(cartprodprice.innerHTML);

addTocart.forEach(function(element) {
  element.addEventListener('click', () => {
    let index = Array.from(addTocart).indexOf(element);
    cartprodname.innerHTML = prodname[index].innerHTML;
    cartprodprice.innerHTML = prodprice[index].innerHTML;
    cartprodimg.src = prodimg[index].src;
  });
});


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
            options.forEach((otherOption) => {
                if (otherOption !== event.target) {
                    otherOption.style.color = '';
                    otherOption.style.fontWeight = '500';
                    otherOption.classList.remove('selected');
                }
            });

            if (event.target.classList.contains('selected')) {
                event.target.style.color = '';
                event.target.style.fontWeight = '500';
                event.target.classList.remove('selected');
                // console.log("Unclicked option");
            } 
            else {
                event.target.style.color = '#088178';
                event.target.style.fontWeight = '700';
                event.target.classList.add('selected');
                // console.log("Clicked on option");
            }
        });
    });
}



