
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryContainer = document.getElementById("checkout_summary");
const form = document.getElementById("form");


function renderCheckoutSummary() {
  if (cart.length === 0) {
    summaryContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;

  const itemsHTML = cart.map(item => {
    total += item.price.amount;

    return `
      <div class="summary-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="summary-info">
          <h4>${item.name}</h4>
          <p>Qty: 1</p> <!-- Later you can add quantity feature -->
          <p class="price">${item.price.word} ${item.price.amount}</p>
        </div>
      </div>
    `;
  }).join("");

  summaryContainer.innerHTML = `
    ${itemsHTML}
    <div class="summary-total">
      <strong>Total:</strong> Tsh ${total}
    </div>
  `;
}

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const payment = document.querySelector("input[name='payment']:checked").value;

  if (!name || !email || !phone || !address) {
    alert("Please fill in all fields.");
    return;
  }

 
  const orderDetails = {
    customer: { name, email, phone, address },
    cart,
    payment,
  };

 

  alert("✅ Your order has been placed successfully!");


  localStorage.removeItem("cart");

 
  window.location.href = "index.html";
});


renderCheckoutSummary();
