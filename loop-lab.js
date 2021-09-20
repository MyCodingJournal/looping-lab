// Code your solutions in this file

//Practice: The for loop

for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

    return gifts;
}

wrapGifts(gifts);

//Assignment-= build a for loop
const names = ["Ada", "Brendan", "Ali"];

function writeCards(names){
    for(i = 0; i < names.length; i++) {
        console.log(`"Thank you, ${names[i]}, for the wonderful birthday gift!"`);
        
    }

    return names;
}

writeCards(names);

//Practice: The while loop

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
    }

    return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

//Assignment- Build a while loop
function countDown() {
    let countDown = 10;
    while ( countDown > 0 ) {
        console.log(countDown--);
    }
    return countDown;
}

countDown(10);
