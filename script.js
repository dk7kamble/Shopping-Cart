let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        total += item.price;
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

