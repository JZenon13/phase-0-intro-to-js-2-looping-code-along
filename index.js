//const gifts = ["teddy bear", "drone", "doll"];

/*  function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts); */

let newArray = [];
function writeCards(stringNames,eventName) {
    for (let i = 0; i < stringNames.length; i++) {
        newArray.push (`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`); 
    debugger;}
    return newArray;
} 
function countDown(integer) {
    while (integer >= 0) {
        console.log(integer--);
    }
}