const prompt = require('prompt-promise');
let AvTree = require('./TREES/averagetrees');
let ExTree = require('./TREES/exotictrees');
let LesXoz = require('./lesxoz/lesxoz');
let Rosha = require ('./rosha')

let lesXoz = new LesXoz();
let rosha = new Rosha();

let averages = [
    new AvTree('Birch', 20000),
    new AvTree('Oak', 25000),
    new AvTree('Willow', 11000),
    new AvTree('Maple', 30000),
];

let exotics = [
    new ExTree('Cactus', 2000),
    new ExTree('Acacia', 15000),
    new ExTree('Baobab', 40000),
    new ExTree('Cypress', 30000),
];

lesXoz.addAveragePool(averages);
lesXoz.addExoticPool(exotics);

(async () => {
    const treename = await prompt('Enter your tree  ');
    const quantity = await prompt('Enter quantity of the trees  ');
    const deilvery = await prompt('Choose delivery: ASAP or Average, if ASAP you will pay extra 100 $ per every tree  ');
    const exotic = lesXoz.exoticTreesFilter(treename);
    const average = lesXoz.averageTreesFilter(treename);

    if (exotic) {
        exotic.addQuantity(quantity);
        exotic.addPrice(deilvery);
        exotic.Total(quantity);
        rosha.addRoshaTree(exotic)
        

    } else{
    average.addQuantity(quantity);
    average.addPrice(deilvery);
    average.Total(quantity);
    rosha.addRoshaTree(average)

    }
    prompt.finish();
})();