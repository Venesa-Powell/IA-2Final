// Product list
const items = [
  { id: 'b1', name: 'Body Wave 3PC', price: 150, img: '../Assets/wave.jpg' },
  { id: 'b2', name: 'Straight 3PC', price: 200, img: '../Assets/straight.jpg' },
  { id: 'b3', name: 'Deep Curl Bundle (3pc)', price: 180, img: '../Assets/deep.jpg' },
  { id: 'w3', name: 'Autumn Bad', price: 220, img: '../Assets/autumn.jpg' },
  { id: 'w4', name: 'Barbie Pink', price: 250, img: '../Assets/pink.jpg' },
  { id: 'w5', name: 'Luxury Blonde 613', price: 300, img: '../Assets/blonde.jpg' }
];

// Render product cards
function render() {
  const container = document.getElementById('products');
  if (!container) return;

  container.innerHTML = items.map(p => `
    <div class="card">
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>JMD ${p.price}</p>

      <label>Length:</label>
      <select id="length-${p.id}">
        <option>14"</option>
        <option>16"</option>
        <option>18"</option>
        <option>20"</option>
        <option>22"</option>
      </select>

      <br><label>Type:</label>
      <select id="type-${p.id}">
        <option>Mongolian</option>
        <option>Peruvian</option>
        <option>Brazilian</option>
        <option>Malasian</option>
      </select>

      <br><label>Qty:</label>
      <input type="number" id="qty-${p.id}" value="1" min="1" style="width:60px;">

      <br><br>
      <button onclick='addToCart(
        "${p.id}",
        "${p.name}",
        ${p.price},
        document.getElementById("length-${p.id}").value,
        document.getElementById("type-${p.id}").value,
        parseInt(document.getElementById("qty-${p.id}").value)
      )'>Add to Cart</button>
    </div>
  `).join('');
}


// Add item to cart using localStorage
function addToCart(id, name, price, length, type, quantity) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item =>
    item.id === id && item.length === length && item.type === type
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ id, name, price, length, type, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

// Run render on page load
window.onload = render;
