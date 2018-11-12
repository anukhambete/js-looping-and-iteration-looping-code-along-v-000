// Code your solutions in this file
function printBadges(array) {

  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}

function tailsNeverFails() {
  let count = 0;
  let a = 5;
  while (Math.random() >= 0.5) {
    count = count + 1;
  }
  count = count;
  console.log(`You got ${count} tails in a row!`)
  console.log("You got " + count + "tails in a row!")
}
