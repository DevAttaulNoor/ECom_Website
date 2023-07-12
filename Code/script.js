//* Mobile Side Navbar Process
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

//* Mobile Side Navbar Process
const cart_slide = document.querySelector("#cart-slide-open");
const cart_unslide = document.querySelector("#cart-slide-close");
const cart = document.querySelector(".cart-slide");

if (cart_slide) {
    cart_slide.addEventListener('click', () => {
        cart.classList.add("cart-active");
    })
}

if (cart_unslide) {
    cart_unslide.addEventListener('click', () => {
        cart.classList.remove("cart-active");
    })
}

//* Single Product Slider
let mainImg = document.querySelector(".mainImg");
let smallImg = document.querySelectorAll(".smallImg");

smallImg.forEach(function (img, index) {
    img.onclick = function () {
        mainImg.src = smallImg[index].src;
    };
});

//* Quantity Increase of the Product
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

//* Size Options of the Product
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

//* Adding items to cart
let addTocart = document.querySelectorAll('.prod .cart');
let prodname = document.querySelectorAll('.description .prod-name');
let prodprice = document.querySelectorAll('.description .prod-price');
let prodimg = document.querySelectorAll('.prod img');
let cartprodname = document.querySelector('#cart-prod-name');
let cartprodprice = document.querySelector('#cart-prod-price');
let cartprodimg = document.querySelector('.items img');
let cartitems = JSON.parse(localStorage.getItem('cartItems')) || []; // Retrieve cart items from localStorage or initialize an empty array
let cartprods = document.querySelector('.cart-items');
let buybtn = document.querySelector('#buy-btn')
cartprods.classList.add('nonActive');
buybtn.classList.add('nonActive');
let itemremove;

function removeFromCart(index) {
    cartitems.splice(index, 1);
    updateCartDisplay();
    saveCartItems();
}

function attachRemoveListeners() {
    itemremove = document.getElementsByClassName('far fa-times-circle fa-lg');
    for (let i = 0; i < itemremove.length; i++) {
        itemremove[i].addEventListener('click', () => {
            removeFromCart(i);
        });
    }

    if (cartitems.length == 0) {
        buybtn.classList.add('nonActive');
    }
}

function updateCartDisplay() {
    cartprods.innerHTML = '';

    cartitems.forEach(item => {
        cartprods.classList.remove('nonActive');
        buybtn.classList.remove('nonActive');

        let cartItemElement1 = document.createElement('div');
        cartItemElement1.classList.add('items');
        let cartItemElement2 = document.createElement('div');
        let cartItemElement3 = document.createElement('div');
        let cartItemElement4 = document.createElement('div');

        cartItemElement2.innerHTML = `<img src="${item.image}" alt="${item.name}">`;
        cartItemElement3.innerHTML = `<h5 id="cart-prod-name">${item.name}</h5><h5 id="cart-prod-price">${item.price}</h5><div class="quantity"><i class="fas fa-plus"></i><span class="quantity-value">${item.quantity}</span><i class="fas fa-minus"></i></div>`;
        cartItemElement4.innerHTML = `<i id="item-remove" class="far fa-times-circle fa-lg"></i><h5 class="item-price">${item.price * item.quantity}</h5>`;
        cartItemElement1.innerHTML = `<div class="item-img">${cartItemElement2.innerHTML}</div><div class="item-details">${cartItemElement3.innerHTML}</div><div class="item-process">${cartItemElement4.innerHTML}</div>`;
        cartprods.appendChild(cartItemElement1);
    });

    // Attach event listeners to plus and minus buttons
    const plusBtns = document.querySelectorAll('.fa-plus');
    const minusBtns = document.querySelectorAll('.fa-minus');

    plusBtns.forEach((plusBtn, index) => {
        plusBtn.addEventListener('click', () => {
            const quantityValue = plusBtn.parentElement.querySelector('.quantity-value');
            let currentValue = parseInt(quantityValue.innerText);
            let updatedValue = currentValue + 1;
            quantityValue.innerText = updatedValue;
            cartitems[index].quantity = updatedValue; // Update the quantity in the cartitems array

            // Update the item price based on the new quantity
            const itemPriceElement = plusBtn.parentElement.parentElement.nextElementSibling.querySelector('.item-price');
            itemPriceElement.innerText = cartitems[index].price * cartitems[index].quantity;

            saveCartItems(); // Save the updated cart items to localStorage
        });
    });

    minusBtns.forEach((minusBtn, index) => {
        minusBtn.addEventListener('click', () => {
            const quantityValue = minusBtn.parentElement.querySelector('.quantity-value');
            let currentValue = parseInt(quantityValue.innerText);
            if (currentValue > 1) {
                let updatedValue = currentValue - 1;
                quantityValue.innerText = updatedValue;
                cartitems[index].quantity = updatedValue; // Update the quantity in the cartitems array

                // Update the item price based on the new quantity
                const itemPriceElement = minusBtn.parentElement.parentElement.nextElementSibling.querySelector('.item-price');
                itemPriceElement.innerText = cartitems[index].price * cartitems[index].quantity;

                saveCartItems(); // Save the updated cart items to localStorage
            }
        });
    });

    attachRemoveListeners(); // Attach event listeners for item remove
}

function saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartitems));
}

addTocart.forEach(function (element) {
    element.addEventListener('click', () => {
        let index = Array.from(addTocart).indexOf(element);

        // Check if the item is already in the cart
        const isAlreadyInCart = cartitems.some(item => item.name === prodname[index].innerHTML);
        if (isAlreadyInCart) {
            // Item is already in the cart, do not add again
            return;
        }

        cartprodname.innerHTML = prodname[index].innerHTML;
        cartprodprice.innerHTML = prodprice[index].innerHTML;
        cartprodimg.src = prodimg[index].src;

        let selectedItem = {
            name: prodname[index].innerHTML,
            price: parseFloat(prodprice[index].innerText.replace(/[^\d.]/g, '')), // Extract numerical value from innerText
            image: prodimg[index].src,
            quantity: 1 // Set the initial quantity to 1
        };

        cartitems.push(selectedItem);
        updateCartDisplay();
        saveCartItems(); // Save the updated cart items to localStorage

        // Disable the "Add to Cart" button for the selected item
        element.disabled = true;
    });
});

let products = document.querySelectorAll(".prod");
let cartBtns = document.querySelectorAll(".prod .cart");

products.forEach(function (product) {
    product.onclick = function (event) {
        event.stopPropagation(); // Prevents the cart button event from triggering

        window.location.href = "sproduct.html";
    };

    let cartButton = product.querySelector(".cart");
    cartButton.onclick = function (event) {
        event.stopPropagation(); // Prevents the product click event from triggering
        return false; // Prevents the default behavior of the cart button
    };
});

// Initialize the cart display when the page loads
updateCartDisplay();