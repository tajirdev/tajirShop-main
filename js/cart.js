let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector("#cart-container");
const cartTotal = document.querySelector("#cart-total");

function renderCart(){
  cartContainer.innerHTML = "";


  let total = 0;

  if(cart.length===0){
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "Tsh 0";
    return;
  }


cart.forEach((item, index)=>{
  total+=item.price.amount;

  const div = document.createElement("div");
   div.classList.add("cart-item");

   div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>Tsh ${item.price.amount}</p>
      </div>
      <button class="remove-btn RemoveBtn" data-index="${index}">Remove</button>
    `;
      cartTotal.textContent = `Tsh ${total}`;
    cartContainer.appendChild(div);
});
 cartTotal.textContent = `Tsh ${total}`;
addRemoveLister();

}



function addRemoveLister(){
  document.querySelectorAll(".remove-btn").forEach(btn=>{
    btn.addEventListener("click",(e)=>{
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);

      localStorage.setItem("cart",JSON.stringify(cart));
      renderCart();
    });
  });
}

renderCart();