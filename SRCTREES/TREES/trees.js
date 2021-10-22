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
    
    
}

module.exports = Trees;