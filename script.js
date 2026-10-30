
// 1. SEARCH PRODUCTS
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase();

    products.forEach(function (product) {
        const productName = product
            .querySelector(".product-name")
            .textContent.toLowerCase();

        // Show matching products only
        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

// 2. ADD TO CART
let cartCount = 0;

const cartCounter = document.getElementById("cartCount");
const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartCount++;

        // Update cart quantity
        cartCounter.textContent = cartCount;

        alert("Product added to cart!");
    });
});
