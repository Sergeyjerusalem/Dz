class Rosha {
    constructor() {
        this.rosha = [];
        
    }
    
    addRoshaTree(tree) {
        this.rosha.push(tree); 
        console.log(`You have ${tree.quantity} ${tree.treename}s  in your garden, it will cost you ${tree.price}$`);
    }

}

module.exports = Rosha;