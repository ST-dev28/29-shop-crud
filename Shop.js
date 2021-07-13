class Shop {
    constructor(name) {
        this.list = [];
        this.shopName = name;
        this.clientList = [];
    }

    intro() {
        console.log(`Hi, we are "${this.shopName}"`);
    }
    addItem(item, price) {
        if (!this.isValidProductName(item) ||
            !this.isValidPrice(price)) {
            return false;
        }
        let product = item;
        let cost = (price / 100).toFixed(2);

        this.list.push({ product, price });
        console.log(`"${this.shopName}" sells ${product} for ${cost} EUR now!`);
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

    };


    creatChart() {

    }

    addItemToChart() {

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