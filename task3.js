


const Store = function() {
    this.products = []

    this.addProduct = function (id, name, price, quantity){

        // this.item = new item(id, name, price, quantity)

        this.products.push ({id, name, price, quantity})
    }

    // To display products
    this.displayProducts = function(){
        return this.products
    }

    // To check if product exist
    this.checkIfProductExist = function (id) {
       this.findIndex = this.products.findIndex((item) => item.id === id);
       if (this.findIndex === -1){
        return 'Product does not exist';
       }else {
        return 'Product exist!';
       }

    }

    this.addPriceOfItems = function (){
       let total = 0;

       this.products.forEach((product) => total += product.price);
       return total;

    }

    
        
// Check on the net if findIndex is a builtIn function.
    

}



let store = new Store();

//Add products
store.addProduct(1, 'Books', 100, 3)
store.addProduct(2, 'Car', 1340, 5)
store.addProduct(4, 'Hook', 200, 67)
store.addProduct(5, 'Hook', 200, 67)
store.addProduct(6, 'Hook', 200, 67)


console.log(store.displayProducts())
console.log()
console.log (store.checkIfProductExist(10))
console.log(`Total Product prices in the Store $${store.addPriceOfItems()}`)
