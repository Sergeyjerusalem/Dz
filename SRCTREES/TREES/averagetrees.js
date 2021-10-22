const Trees = require('./trees');

class AverageTrees extends Trees {
    constructor(treename, price, quantity, delivery) {
        super(treename, price, quantity, delivery);
    }

}

module.exports = AverageTrees;