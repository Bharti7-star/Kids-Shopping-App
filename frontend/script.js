fetch('http://localhost:5000/products')
  .then(res => res.json())
  .then(data => {
    const products = document.getElementById('products');

    data.forEach(product => {
      products.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <h4>₹${product.price}</h4>
          <button>Add To Cart</button>
        </div>
      `;
    });
  });
