
class LesXoz {
    constructor() {
        this.Averagetrees = [];
        this.Exotictrees = [];
    }

    addExoticTree(exotic) {
        this.Exotictrees.push(exotic);
    }

    addAverageTree(average) {
        this.Averagetrees.push(average);
    }

    addAveragePool(averages) {
        this.Averagetrees = [...this.Averagetrees, ...averages];
    }

    addExoticPool(exotics) {
        this.Exotictrees = [...this.Exotictrees, ...exotics];
    }
    
    averageTreesFilter(name) {
        if (this.Averagetrees.find((average) => average.getTreeName() == name)) {
            return this.Averagetrees.find((average) => average.getTreeName() == name);
       // } else { throw "Error, tree is not available"
            
        }
    }
    
    exoticTreesFilter(name1) {
        if (this.Exotictrees.find((exotic) => exotic.getTreeName() == name1)) {
            return this.Exotictrees.find((exotic) => exotic.getTreeName() == name1);
       // } else { throw "Error, exotic tree is not available"
            
        }
    }
}
module.exports = LesXoz;