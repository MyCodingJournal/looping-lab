//--------------------------------------------------------------------
//Looping Lab---------------------------------------------------------
//https://github.com/VGDJP-07/phase-0-intro-to-js-2-looping-code-along

//Why use loops- example
const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

//--------------------------------------------------------------------------
//Practice: The for loop

//Of the loops in JavaScript, the for loop is the most common. The for loop is made up of four statements in the following structure:

//Syntax

for ([initialization]; [condition]; [iteration]) {
  [loop body]
}

for (initialization; condition; iteration){
  loop body;//set of statements that we want to run when the condition evaluates to true.
}

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

//*NOTE*-Usage: Use a for loop when you know how many times you want the loop to run (for example, when you're looping through elements in an array).

//Using for with Arrays--------------------------------------------------------
//rewrite our gift-wrapping action above as a for loop. 

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

//--------------------------------------------------------------------------------
//Assignment: Build a for loop

const names = ["Ada", "Brendan", "Ali"];

function writeCards(names){
    for(i = 0; i < names.length; i++) {
        console.log(`"Thank you, ${names[i]}, for the wonderful birthday gift!"`);
    }

    return names;
}

writeCards(names);

//------------------------------------------------------------------------------
//Practice: The while loop

//while loop is similar to a for loop, repeating an action in a loop based on a condition. Both will continue to loop until that condition evaluates to false. 

//Unlike for, while only requires condition and loop statements:

//Syntax

while ([condition]) {
  [loop body]
}

//We could rewrite our original for loop gift wrapping example using a while loop and achieve the exact same result:

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

//Using a while loop enables us to check conditions that aren't based on a counter.

//---------------------------------------------------------------------------------
//Assignment- Build a while loop

function countDown() {
    let countDown = 10;
    while ( countDown > 0 ) {
        console.log(countDown--);
    }
    return countDown;
}

countDown(10);
