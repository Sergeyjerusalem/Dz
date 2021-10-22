const Trees = require ('./trees');

class ExoticTrees extends Trees {
    constructor(treename, price, quantity,delivery) {
        super(treename, price, quantity,delivery);
    }   
    
}
     
module.exports = ExoticTrees;