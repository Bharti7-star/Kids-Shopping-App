fetch("http://localhost:5000/products")
.then(res => res.json())
.then(data => {

  let html = "";

  data.forEach(product => {

    html += `
      <div class="card">
        <img src="${product.image}"
         width="150">

        <h2>${product.name}</h2>

        <p>₹${product.price}</p>

        <button>
          Buy Now
        </button>
      </div>
    `;
  });

  document.getElementById("products")
  .innerHTML = html;
});
