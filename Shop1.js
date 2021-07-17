class Shop {
    constructor(name) {
        this.list = [];
        this.shopName = name;
        this.clientList = [];
        this.cart = [];
    }

    intro() {
        console.log(`Hi, we are "${this.shopName}". \nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`);
    }
    addItem(item, price) {
        if (!this.isValidProductName(item) ||
            !this.isValidPrice(price)) {
            return false;
        }
        let product = item;
        let unitPrice = (price / 100).toFixed(2);

        this.list.push({ product, price });
        console.log(this.list);
        console.log(`"${this.shopName}" sells ${product} for ${unitPrice} EUR now!`);
    }

    items() {
        console.log('--------------------');
        console.log(`Items for sale at "${this.shopName}":`);
        for (let i = 0; i < this.list.length; i++) {
            const item = this.list[i];
            console.log(`${i + 1}) ${item.product} - ${(item.price / 100).toFixed(2)} EUR;`);
        }
        console.log('--------------------');
    }

    updatePrice(itemName, newPrice) {
        for (let i = 0; i < this.list.lenght; i++) {
            const product = this.list[i];

            if (itemName === product.item.toLowerCase()) {
                product.price = newPrice;
            }
        }
        console.log(`"${this.shopName}" updated price and sells ${itemName} for ${(newPrice / 100).toFixed(2)} EUR now!`);
    }

    createCart(client) {
        this.clientList.push({ client, items: [] });

        console.log(`${client} has an open cart at "${this.shopName}"!`);
        //console.log(this.cart);
    }

    addItemToCart(name, id, count) {
        for (let i = 0; i < this.cart.length; i++) {
            const product = this.cart[i];
            if (product.client === name) {
                this.cart.push({ id, count });
                //product.items.push({
                //id: id,
                //count: count
                //})
            }
        }
        //console.log(this.cart);
    }

    order() {

    }

    orderPrice() {

    }

    removeItem() {

    }

    pay() {

    }

    shopSummary() {

    }

    isValidProductName(itemName) {
        if (typeof itemName !== 'string' ||
            itemName === '' ||
            itemName !== itemName.toLowerCase()) {
            console.error('ERROR: Item name cant be empty and existing name has to be in lower case');
            return false
        }
        return true;
    }
    isValidPrice(price) {
        if (typeof price !== 'number' ||
            price < 0 ||
            price % 1 !== 0) {
            console.error('ERROR: Price cant be zero');
            return false;
        }
        return true;
    }
}

module.exports = Shop;