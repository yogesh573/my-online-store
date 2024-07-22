document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
    
    const cart = [];
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 15.00 },
        { id: 3, name: 'Product 3', price: 20.00 }
    ];

    // Carousel functionality
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    function showNextImage() {
        carouselImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        carouselImages[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
    carouselImages[0].classList.add('active'); // Show the first image initially

    function updateCart() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const totalPrice = document.getElementById('total-price');

        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        });

        totalPrice.textContent = total.toFixed(2);
    }

    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.parentElement.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            cart.push(product);
            updateCart();
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function() {
        alert('Thank you for your purchase!');
        cart.length = 0; // Clear the cart
        updateCart();
    });
});
