
import { products } from "./product.js";
const grid = document.querySelector("#js-product-grid");

function renderProducts(list = products){
grid.innerHTML = list.map(post=>`
   <div class="product-card">
        <img src="${post.image}" class="product-amage">
        <span class="product-name">${post.name}</span>
        <span class="product-price"><h3>${post.price.word}</h3><p>${post.price.amount}</p></span>
        <button id="js-add-to-cart" class="add-to-cart">Add To Cart</button>
   </div>

  `).join("");
  
}


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function cartAdded(){
  const buttons = document.querySelectorAll("#js-add-to-cart");

  buttons.forEach((btn, index)=>{
    btn.addEventListener("click",()=>{
     
     addTocart(products[index]);
    });
  });
}


function addTocart(product){
cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
}


function updateCart(){
  const cartOut = document.getElementById("cart-count");
  cartOut.textContent = cart.length;
}

const searchInput = document.querySelector("#search_bar");


function handleSearc(query){
  const filtered = products.filter(product=>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  renderProducts(filtered);
}


searchInput.addEventListener("input",()=>{
  handleSearc(searchInput.value);
});

renderProducts();
cartAdded();

   