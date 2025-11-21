function loadCart() {
  //  Get cart from localStorage
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = ""; // empty cart display

  let subtotal = 0;
  const deliveryFee = 50; // fixed delivery fee

  //  Loop through each item in cart
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let total = item.price * item.quantity;
    subtotal = subtotal + total;

    //  Create table row
    let row = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = item.name + " (" + item.length + ", " + item.type + ")";
    row.appendChild(nameCell);

    let priceCell = document.createElement("td");
    priceCell.textContent = "USD " + item.price;
    row.appendChild(priceCell);

    let qtyCell = document.createElement("td");
    qtyCell.textContent = item.quantity;
    row.appendChild(qtyCell);

    let totalCell = document.createElement("td");
    totalCell.textContent = "USD " + total;
    row.appendChild(totalCell);

    let removeCell = document.createElement("td");
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    //  Remove item when clicked
    removeBtn.onclick = function() {
      removeItem(i);
    };

    removeCell.appendChild(removeBtn);
    row.appendChild(removeCell);

    cartItems.appendChild(row);
  }

  // Show subtotal and grand total
  document.getElementById("subtotal").textContent = "USD " + subtotal;
  document.getElementById("grandtotal").textContent = "USD " + (subtotal + deliveryFee);

  // Save subtotal for checkout page
  localStorage.setItem("cartTotal", subtotal+deliveryFee);
}

function removeItem(index) {
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  cart.splice(index, 1); // remove item
  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart(); // reload cart
}

window.onload = loadCart;
