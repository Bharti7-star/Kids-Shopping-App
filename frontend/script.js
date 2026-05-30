const products = [
{
 id:1,
 name:"Boys T-Shirt",
 category:"BOYS",
 price:499,
 image:"images/boys-shirt.jpg"
},
{
 id:2,
 name:"Girls Dress",
 category:"GIRLS",
 price:799,
 image:"images/girls-dress.jpg"
},
{
 id:3,
 name:"Toy Car",
 category:"TOYS",
 price:999,
 image:"images/toy-car.jpg"
},
{
 id:4,
 name:"Kids Shoes",
 category:"SHOES",
 price:699,
 image:"images/shoes.jpg"
}
];

function loadProducts(category="ALL"){

 const container =
 document.getElementById("products");

 container.innerHTML="";

 const filtered =
 category==="ALL"
 ? products
 : products.filter(
   p=>p.category===category
 );

 filtered.forEach(product=>{

   container.innerHTML += `
   <div class="card">
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add To Cart</button>
   </div>
   `;
 });
}

loadProducts();

document
.getElementById("category")
.addEventListener("change",e=>{
 loadProducts(e.target.value);
});
