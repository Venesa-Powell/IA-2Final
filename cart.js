function loadCart() {
  //  Get cart from localStorage
  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart); //chage string to object
  } else {
    cart = []; //create empty cart
  }

  //so java knows where to put the items
  const cartItems = document.getElementById("cart-items"); // find  in webpage element that has id  and store under const
  cartItems.innerHTML = ""; // inside  cartitems empty everything

  let subtotal = 0;
  const deliveryFee = 50; // fixed delivery fee

  //  Loop through each item in cart
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]; //grabs item at i and stores in
    let total = item.price * item.quantity;
    subtotal = subtotal + total;


    //DOM CRITERIA CREATE
    //  Create table row
    let row = document.createElement("tr");

    let nameCell = document.createElement("td"); //craete a new html element
    nameCell.textContent = item.name + " (" + item.length + ", " + item.type + ")"; //inside that namecell put text
    row.appendChild(nameCell); //add to row cell

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
    removeBtn.textContent = "Remove"; //

    //  Remove item when clicked
    removeBtn.onclick = function() {
      removeItem(i);
    };

    removeCell.appendChild(removeBtn);
    row.appendChild(removeCell);

    cartItems.appendChild(row); //completed row into cart items
  }

  // Show subtotal and grand total
  document.getElementById("subtotal").textContent = "USD " + subtotal;
  document.getElementById("grandtotal").textContent = "USD " + (subtotal + deliveryFee);

  // Save subtotal for checkout page
  localStorage.setItem("cartTotal", subtotal+deliveryFee); // save grand total to local storage
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
