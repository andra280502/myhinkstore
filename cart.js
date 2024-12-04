// Simpan keranjang di localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Ambil keranjang dari localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Tampilkan isi keranjang
function displayCart() {
    loadCart();
    const cartList = document.getElementById('cart-list');
    if (cart.length === 0) {
        cartList.innerHTML = '<p>Keranjang Anda kosong.</p>';
        return;
    }

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Harga: Rp${product.price}</p>
            <p>Jumlah: ${item.quantity}</p>
        `;
        cartList.appendChild(productDiv);
    });
}

displayCart();
