class Trees{
    constructor(treename, price, quantity,delivery) {
        this.treename = treename;
        this.price = price;
        this.delivery = delivery;
        this.quantity = quantity;
    }

    addPrice(delivery) {
        if (delivery =='ASAP') {
         this.price += 100;
        }  else {
            return this.price 
        }
    }
   
    getTreeName() {
       return this.treename;
    } 

    addQuantity(quantity) {
        this.quantity = quantity;
    }

    Total(quantity) {
        this.price = this.price * quantity;
    }
    
    toString() {
        return `You have ${this.quantity} ${this.treename}s  in your garden, it will cost you ${this.price}$`;
    }
}

module.exports = Trees;