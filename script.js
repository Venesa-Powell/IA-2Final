// Product list
const items = [
  { id: "b1", name: "Body Wave 3PC", price: 150, img: "../Assets/wave.jpg" },
  { id: "b2", name: "Straight 3PC", price: 200, img: "../Assets/straight.jpg" },
  { id: "b3", name: "Deep Curl Bundle (3pc)", price: 180, img: "../Assets/deep.jpg" },
  { id: "w3", name: "Autumn Bad", price: 220, img: "../Assets/autumn.jpg" },
  { id: "w4", name: "Barbie Pink", price: 250, img: "../Assets/pink.jpg" },
  { id: "w5", name: "Luxury Blonde 613", price: 300, img: "../Assets/blonde.jpg" }
];

// show all product cards to the page
function render() {
  const container = document.getElementById("products"); // DOM MANIPULATION Select PRODUCT CONTAINER
  if (!container) return;

 // DOM MANIPULATION Dynamically  UPDATE HTML CONTENT CRITERIA
  container.innerHTML = ""; //so i dont get duplicates

  // Loop through each product
  // when first item in the array is reached, create a card for it
  for (let i = 0; i < items.length; i++) {
    const p = items[i];

 //DOM MANIPULATION Dynamically CREATE HTML CONTENT CRITERIA
    // Create card
    const card = document.createElement("div"); //create a new container div
    card.className = "card"; //give the new box a name 

    // Image
    const img = document.createElement("img");
    img.src = p.img;
    img.alt = p.name;
    card.appendChild(img); // put image inside card

    // Name
    const name = document.createElement("h4");
    name.textContent = p.name;
    card.appendChild(name);

    // Price
    const price = document.createElement("p");
    price.textContent = "USD " + p.price;
    card.appendChild(price);

    // Length label
    const lengthLabel = document.createElement("label");
    lengthLabel.textContent = "Length:";
    card.appendChild(lengthLabel);

    // Length dropdown
    const lengthSelect = document.createElement("select"); //create dropdown
    lengthSelect.id = "length-" + p.id;

    const lengths = ['14"', '16"', '18"', '20"', '22"'];
    //loop through lentghs
    for (let j = 0; j < lengths.length; j++) {
      const opt = document.createElement("option");// create option element
      opt.textContent = lengths[j];
      lengthSelect.appendChild(opt); // add option to dropdown
    }
    card.appendChild(lengthSelect); // add dropdown to card

    // Type label
    const typeLabel = document.createElement("label");
    typeLabel.textContent = " Type:";
    card.appendChild(typeLabel);

    // Type dropdown
    const typeSelect = document.createElement("select");
    typeSelect.id = "type-" + p.id;

    const types = ["Mongolian", "Peruvian", "Brazilian", "Malasian"];
    for (let j = 0; j < types.length; j++) {
      const opt = document.createElement("option");
      opt.textContent = types[j];
      typeSelect.appendChild(opt);
    }
    card.appendChild(typeSelect);

    // Quantity label
    const qtyLabel = document.createElement("label");
    qtyLabel.textContent = " Qty:";
    card.appendChild(qtyLabel);

    // Quantity input
    const qtyInput = document.createElement("input");
    qtyInput.type = "number";
    qtyInput.min = "1";
    qtyInput.value = "1";
    qtyInput.id = "qty-" + p.id;
    qtyInput.style.width = "60px";
    card.appendChild(qtyInput);

    // Add to Cart button
    const btn = document.createElement("button");
    btn.textContent = "Add to Cart"; // CHANGE BUTTON TEXT DOM MANIPULATION

    btn.onclick = function () {
      addToCart(
        p.id,
        p.name,
        p.price,
        lengthSelect.value,
        typeSelect.value,
        parseInt(qtyInput.value)
      );
    };

    card.appendChild(btn);

    // Add card to the page
    container.appendChild(card);
  }
}

// Run on page load
window.onload = render; // when page loads run render function



// Add item to cart using localStorage
function addToCart(id, name, price, length, type, quantity) {
  // Get the cart from storage
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) {
    cart = [];
  }

  // Check if item already exists
  let existingItem = null;

  for (let i = 0; i < cart.length; i++) { 
    let item = cart[i];

    if (item.id === id &&
        item.length === length &&
        item.type === type) {

      existingItem = item;
      break; // stop when found so we dont keep looping
    }
  }

  // If it exists, add to quantity
  if (existingItem !== null) {
    existingItem.quantity = existingItem.quantity + quantity;
  }
  // Otherwise add new item
  else {
    cart.push({
      id: id,
      name: name,
      price: price,
      length: length,
      type: type,
      quantity: quantity
    });
  }

  // Save it back
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart!");
}

// Run render on page load
window.onload = render;
