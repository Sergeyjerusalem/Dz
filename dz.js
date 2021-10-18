const p = new Promise((res) => {
    console.log('start zero');
    setTimeout(() => {
        console.log('zero');
        res();
    }, Math.random() * 5000);
})


p.then(function first() {
    return new Promise((res) => {
        console.log('start first');
        setTimeout(() => {
            console.log('first');
            res();
        }, Math.random() * 5000)
    })
})

    .then(function second() {
        return new Promise((res) => {
            console.log('start second');
            setTimeout(() => {
                console.log('second');
                return res();
            }, Math.random() * 5000);
        })
    })

    .then(function third() {
        console.log('start third');
        return Promise.resolve('third')
            .then((text) => console.log(text))
    })

    .then(function fourth() {
        return new Promise((res) => {
            console.log('start fourth');
            setTimeout(() => {
                console.log('fourth');
                return res();
            }, Math.random() * 5000)
        })
    })

    .then(async function fifth() {
        console.log('start fifth');
        console.log('fifth');
    })

