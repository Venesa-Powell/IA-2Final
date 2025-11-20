
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    let subtotal = 0;
    const deliveryFee = 50; // Fixed delivery fee

    cartItems.innerHTML = cart.map((item, index) => {
      const total = item.price * item.quantity;
      subtotal += total;

      return `
        <tr>
          <td>${item.name}<br><small>${item.length}, ${item.type}</small></td>
          <td>JMD ${item.price}</td>
          <td>${item.quantity}</td>
          <td>JMD ${total}</td>
          <td><button onclick="removeItem(${index})">Remove</button></td>
        </tr>
      `;
    }).join('');

    document.getElementById('subtotal').textContent = `JMD ${subtotal}`;
    
    // Add delivery fee to subtotal for grand total
    const grandTotal = subtotal + deliveryFee;
    document.getElementById('grandtotal').textContent = `JMD ${grandTotal}`;

    //save total to localStorage for checkout page
    localStorage.setItem('cartTotal', subtotal);

  }

  function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }

  window.onload = loadCart;

