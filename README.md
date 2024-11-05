/* Basic Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    color: #333;
    background-color: #f3f4f6;
}

header {
    background: linear-gradient(90deg, #4CAF50, #00C6FF);
    color: #fff;
    padding: 1.5em;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

header h1 {
    margin: 0;
    font-size: 2em;
}

nav a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #FFD700;
}

/* Search Section */
.search-section {
    text-align: center;
    padding: 3em;
    background-color: #ffffff;
    border-radius: 10px;
    width: 80%;
    margin: 2em auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-section h2 {
    color: #4CAF50;
}

.search-section input, .search-section button {
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.search-section input {
    width: 60%;
}

.search-section button {
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    border: none;
}

.search-section button:hover {
    background-color: #3e8e41;
}

/* Featured Products Section */
.featured-products {
    padding: 1.5em;
    text-align: center;
    background-color: #00C6FF;
    color: #ffffff;
}

.featured-products h3 {
    font-size: 1.8em;
}

.product {
    background-color: #ffffff;
    padding: 1em;
    margin: 1em auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 60%;
    color: #333;
}

/* Categories Section */
.categories {
    padding: 1.5em;
    text-align: center;
}

.category {
    display: inline-block;
    padding: 15px;
    margin: 10px;
    background: linear-gradient(45deg, #FF6B6B, #FFD700);
    color: #ffffff;
    font-weight: bold;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s, background 0.3s;
}

.category:hover {
    background: linear-gradient(45deg, #FFD700, #FF6B6B);
    transform: scale(1.05);
}
