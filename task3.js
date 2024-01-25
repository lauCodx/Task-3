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

    this.allProducts= function (){
        return this.items
    }

    // calculates the total price of the items in the cart and empty the cart
    this.check = function() {
        let total = 0;
        for (let x of this.items) {
            total += x.price;
        }
        this.items = []; // empty the cart after checking it.
        return total;
    }
}

//  we create a new Cart, add some Products to it, and then call check function to calculate the total price.
let cart = new Cart();
cart.addItem(new Product("Book", 200));
cart.addItem(new Product("Cloth", 75));
cart.addItem(new Product("shoes", 150));

console.log(cart.allProducts())
console.log(`Total: $${cart.check()}`);

