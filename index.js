
            (() => {
                const cart = [];

                function getElements() {
                    return {
                        count: document.getElementById('cartCount'),
                        items: document.getElementById('cartItems'),
                        total: document.getElementById('cartTotal')
                    };
                }

                function addToCart(name, price) {
                    cart.push({ name, price: Number(price) });
                    renderCart();
                    document.getElementById('cartPanel').style.display = 'block';
                }

                function renderCart() {
                    const { count, items, total } = getElements();
                    if (!count || !items || !total) return;
                    count.textContent = cart.length;
                    items.innerHTML = cart.length
                        ? cart.map((item, index) => `<div class="cart-item">${item.name}<span>$${item.price.toFixed(2)} <b class="remove" onclick="removeItem(${index})">×</b></span></div>`).join('')
                        : 'Your cart is empty.';
                    total.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
                }

                function removeItem(index) {
                    cart.splice(index, 1);
                    renderCart();
                }

                function toggleCart() {
                    const panel = document.getElementById('cartPanel');
                    if (panel) panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
                }

                function checkout() {
                    if (!cart.length) return alert('Your cart is empty.');
                    const suggestion = document.getElementById('suggestion');
                    if (suggestion) suggestion.scrollIntoView({ behavior: 'smooth' });
                    alert('Your order is ready! Please complete the checkout form below.');
                }

         
                window.addToCart = addToCart;
                window.removeItem = removeItem;
                window.toggleCart = toggleCart;
                window.checkout = checkout;

                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', renderCart);
                } else {
                    renderCart();
                }
            })();
   
