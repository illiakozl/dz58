const categories = document.querySelectorAll('.category');
const productInfo = document.querySelector('.product-info');
const productButton = document.querySelector('.buy-button');

categories.forEach(category => {
  category.addEventListener('click', () => {
    // Simulate fetching products for the selected category
    const products = [
      { name: 'Product 1', description: 'Description 1' },
      { name: 'Product 2', description: 'Description 2' },
      { name: 'Product 3', description: 'Description 3' }
    ];

    const productHTML = products.map(product => `
      <li class="product-item">
        <span class="product-name">${product.name}</span>
      </li>
    `).join('');

    document.querySelector('.product-list').innerHTML = productHTML;
    productInfo.style.display = 'none';
  });
});

document.querySelector('.product-list').addEventListener('click', event => {
  if (event.target.classList.contains('product-name')) {
    // Simulate fetching product details
    const productName = event.target.textContent;
    const productDescription = `Description for ${productName}`;

    productInfo.querySelector('h2').textContent = productName;
    productInfo.querySelector('p').textContent = productDescription;
    productInfo.style.display = 'block';
  }
});

productButton.addEventListener('click', () => {
  alert('Product purchased!');
  productInfo.style.display = 'none';
});


const orderForm = document.getElementById('order-form');
const errorMessage = document.getElementById('error-message');

orderForm.addEventListener('submit', event => {
  event.preventDefault();

  const customerName = document.getElementById('customer-name').value;
  const city = document.getElementById('city').value;
  const deliveryOption = document.querySelector('input[name="delivery-option"]:checked').value;
  const quantity = document.getElementById('quantity').value;
  const paymentOption = document.getElementById('payment-option').value;
  const orderComment = document.getElementById('order-comment').value;

  if (!customerName || !city || !quantity) {
    errorMessage.textContent = 'Please fill in all required fields.';
  } else {
    
    const orderInfo = `
      <h2>Order Summary</h2>
      <p><strong>Product:</strong> Product Name</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Delivery:</strong> ${deliveryOption === 'courier' ? 'Courier' : 'Pickup'}</p>
      <p><strong>Payment:</strong> ${paymentOption === 'cash' ? 'Cash on Delivery' : 'Credit Card'}</p>
      <p><strong>Order Comment:</strong> ${orderComment}</p>
    `;

    const orderSummary = document.createElement('div');
    orderSummary.innerHTML = orderInfo;
    document.querySelector('.product-info').appendChild(orderSummary);

    
    orderForm.reset();
    errorMessage.textContent = '';
  }
});
