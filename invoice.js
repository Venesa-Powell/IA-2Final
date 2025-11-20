window.onload = function () {
  const invoice = JSON.parse(localStorage.getItem("invoice")) || [];
  const checkoutInfo = JSON.parse(localStorage.getItem("checkoutInfo")) || {};

  const invoiceBody = document.getElementById("invoice-body");
  let subtotal = 0;

  invoiceBody.innerHTML = invoice.map(item => {
    const total = item.price * item.quantity;
    subtotal += total;
    return `
      <tr>
        <td>${item.name} (${item.length}, ${item.type})</td>
        <td>${item.quantity}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>$${total.toFixed(2)}</td> 
      </tr>
    `;
  }).join("");

  const discount = checkoutInfo.discount || 0;
  const shipping = checkoutInfo.shippingFee || 0;
  const grandTotal = subtotal - discount + shipping;

  document.getElementById("invoice-name").textContent = checkoutInfo.name || "";
  document.getElementById("invoice-address").textContent = checkoutInfo.address || "";

  document.getElementById("invoice-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("invoice-discount").textContent = `-$${discount.toFixed(2)}`;
  document.getElementById("invoice-shipping").textContent = `$${shipping.toFixed(2)}`;
  document.getElementById("invoice-total").textContent = `$${grandTotal.toFixed(2)}`;
};
