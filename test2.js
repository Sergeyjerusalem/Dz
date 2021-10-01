
/*let playerone = 0;

for (let i = 0; i < 3; i++) {
    k = Math.round(Math.random() * 5) + 1;
    console.log('First players throws are', k);
    playerone += k;
}
console.log(playerone);



let playertwo = 0;

for (let i = 0; i < 3; i++) {
    k = Math.round(Math.random() * 5) + 1;
    console.log('Second players throws are', k);
    playertwo += k;
}
console.log(playertwo);

if (playerone > playertwo) {
    console.log('Player one wins');

} else if (playertwo > playerone) {
    console.log('Player two wins');
} else {
    console.log('Draw');
}*/

//let Enddate = new Date ('9/28/2021');
// let Startdate = new Date ('1/1/2000');

/* let startDate = new Date('1/1/2000')
let endDate = new Date('9/28/2021')
const givenDay = 5 
const numberofday = 13

let numberOfDates = 0


    while (startDate < endDate) {
        if (startDate.getDay() === givenDay && startDate.getDate() === numberofday) {
          numberOfDates++
        }
        startDate.setDate( startDate.getDate() + 1 )
    }

    console.log('Quantity of Friday 13ths is ', numberOfDates);
*/


/*let a = 25
let b = 5
let rnd
let array = [];

while (b - 1 > 0) {
    rnd = Math.floor(Math.random() * (a - b + 1) + 1);
    a -= rnd;
    b--;
    console.log(rnd);
    array.push(rnd);

}

console.log(a);
array.push(a);
console.log(array);*/

let a = 15
let b = 5
let rnd
let array = [];

while (b - 1 > 0) {
    rnd = Math.round((Math.random() * (a - b + 1) + 1)*100)/100;
    a -= rnd;
    b--;
    console.log(rnd);
    array.push(rnd);

}
a = Math.round (a*100)/100;
console.log(a);
array.push(a);
console.log(array);




