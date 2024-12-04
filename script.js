fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Harga: Rp${product.price}</p>
                <button onclick="addToCart(${product.id})">Beli</button>
            `;
            productList.appendChild(productDiv);
        });
    });

function addToCart(productId) {
    alert(`Produk dengan ID ${productId} telah ditambahkan ke keranjang!`);
}
let cart = [];

function addToCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    alert(`Produk dengan ID ${productId} telah ditambahkan ke keranjang!`);
    console.log(cart); // Untuk melihat isi keranjang di console
}
