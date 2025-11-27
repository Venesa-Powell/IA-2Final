function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('address').value = '';
  document.getElementById('card-number').value = '';
  document.getElementById('cvv').value = '';
  document.getElementById('expiry').value = '';
  alert('Form cleared!');
}

function closePage() {
  alert('Closing checkout page...');
  window.location.href = '../index.html';
}


function cancelOrder() {
  alert('Order canceled.');
  window.location.href = 'cart.html';
}


//event handler
// Check login on page load
document.addEventListener("DOMContentLoaded", () => { //for the whole document listen for content loaded
  const isLoggedIn = localStorage.getItem("isLoggedIn"); //look for isLoggedIn key in localStorage
  if (!isLoggedIn) {
    alert("You must log in or create an account before checking out.");
    window.location.href = "login.html"; //window.location.href means the whole browser window 
  
  } 
});
//  Load cart total and initialize discount
let total = parseFloat(localStorage.getItem("cartTotal")) || 0;
let discount = 0;

// Display totals
document.getElementById("total").textContent = total.toFixed(2); //in the html with id total set its text content to total value with 2 decimal places
document.getElementById("amount").textContent = total.toFixed(2);

//  Coupon feature
document.getElementById("applyCoupon").addEventListener("click", function () {
  const code = document.getElementById("coupon").value.trim().toUpperCase();
  
 //INTERACTIVITY logic
  if (code === "NESA2") {
    discount = total * 0.10;
    alert("Coupon applied! You got 10% off.");
  } else {
    discount = 0;
    alert("Invalid coupon code.");
  }

  const newAmount = total - discount;
  document.getElementById("amount").textContent = newAmount.toFixed(2);
  localStorage.setItem("discount", discount);
});

// Save checkout info to localStorage
function saveCheckoutInfo() {
  
  const checkoutInfo = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    cardNumber: document.getElementById('card-number').value,
    cvv: document.getElementById('cvv').value,
    expiry: document.getElementById('expiry').value,
    total: parseFloat(document.getElementById("amount").textContent) || 0,
    discount: discount || 0,
    shippingFee: 50 // Delivery fee
  };
// Store in localStorage
  localStorage.setItem('checkoutInfo', JSON.stringify(checkoutInfo));
}


//  Checkout button — finalize and redirect
function confirmOrder() {
  // Save checkout details
  saveCheckoutInfo();
  

  alert("Order confirmed! loading ...");

  // Clear the cart and move to confirmation page
  localStorage.removeItem("cart");
  window.location.href = "thank.html";

}
