// script.js

// Sample array of products with name, image, and description
const products = [
    {
        name: "Wireless Headphones",
        image: "https://via.placeholder.com/200x150?text=Headphones",
        description: "High-quality wireless headphones with noise cancellation and 20-hour battery life."
    },
    {
        name: "Smartwatch",
        image: "https://via.placeholder.com/200x150?text=Smartwatch",
        description: "A smartwatch with health tracking, GPS, and notifications synced to your phone."
    },
    {
        name: "Laptop",
        image: "https://via.placeholder.com/200x150?text=Laptop",
        description: "A powerful laptop for gaming and productivity with a 15.6-inch display."
    },
    {
        name: "Bluetooth Speaker",
        image: "https://via.placeholder.com/200x150?text=Speaker",
        description: "Portable Bluetooth speaker with superior sound quality and long-lasting battery."
    }
];

// Function to display products
function displayProducts(productsToDisplay) {
    const resultsSection = document.getElementById("results-section");
    resultsSection.innerHTML = ""; // Clear previous results

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button>Add to Cart</button>
        `;

        resultsSection.appendChild(productDiv);
    });
}

// Initial product display (shows all products)
displayProducts(products);

// Search functionality
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
