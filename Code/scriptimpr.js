addTocart.forEach(product => {
    product.addEventListener('click', addtoCart)
});

function addtoCart(){
    let prodname = document.querySelectorAll('.description h5').textContent;
    let prodprice = document.querySelectorAll('.description h4').textContent;
    let prodimg = document.querySelectorAll('.prod img').getAttribute('src');

    const selectedItem = {
        name: prodname,
        price: prodprice,
        imgsrc: prodimg
    };

    cartitems.push(selectedItem);
    updateCartDisplay();
}

function updateCartDisplay(){
    let cartprods = document.querySelector('.item-details')

    cartprods.innerHTML = '';

    cartitems.forEach(item =>{
        let cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <img src="${item.imagesrc}" alt="${item.name} Image">
        `;
        cartprods.appendChild(cartItemElement);
    });
}