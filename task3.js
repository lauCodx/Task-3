// A function that represents a product with a name and price
function Product(name, price) { 
    this.name = name;
    this.price = price;
}

// A function that represents a shopping cart. It has methods to addItem (add a product to the cart) and checkout (calculate the total price of the items in the cart and empty the cart).
function Cart() {
    this.items = []; //instance of cart object

    this.addItem = function(item) {
        this.items.push(item); // to add a product to the cart
    }

    // calculates the total price of the items in the cart and empty the cart
    this.check = function() {
        let total = 0;
        for (let item of this.items) {
            total += item.price;
        }
        this.items = []; // empty the cart after checking it.
        return total;
    }
}

// Usage
let cart = new Cart();
cart.addItem(new Product("Book", 200));
cart.addItem(new Product("Cloth", 75));
cart.addItem(new Product("shoes", 150));

console.log(`Total: $${cart.check()}`);

