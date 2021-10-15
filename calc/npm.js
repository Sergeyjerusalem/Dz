const fs = require('fs-extra');
const src = '/Users/pro/lol/calc/papka/a.txt';
const dest = '/Users/pro/lol/calc/papka2/b.txt';


function foo() {
    fs.mkdir('papka', err => {
        if (err) {
            console.log(err);
            return
        }


        fs.writeFile(src, 'a', err => {
            if (err) {
                console.log(err)
                return
            }


            fs.mkdir('papka2', err => {
                if (err) {
                    console.log(err);
                    return
                }


                fs.move(src, dest, err => {
                    if (err) {
                        console.log(err);
                        return
                    }


                    fs.remove(dest, err => {
                        if (err) {
                            console.log(err);
                            return
                        }


                        fs.remove('papka', err => {
                            if (err) {
                                console.log(err);
                                return
                            }


                            fs.remove('papka2', err => {
                                if (err) {
                                    console.log(err);
                                    return
                                }
                            })

                        })
                    })

                })

            })

        })

    })



}

foo();

