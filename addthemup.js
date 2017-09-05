// It is going to take a bunch of parameters and
// add them up.

// Capture the parameters

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });

// create a number variable
var sumOfTheNumbers = 0;
// how many of them are there ?

var howManyParameters = process.argv.length

// for loop

for (counter = 2; counter < howManyParameters; counter++) {
  console.log("Counter ", counter, " Value ", process.argv[counter])
  // if the parameter is a number ?
  if (!isNaN(process.argv[counter])) {
    //  keep adding to THAT variable
    sumOfTheNumbers = sumOfTheNumbers + parseInt(process.argv[counter])
    console.log("Is a number !")
  }
}

// return THAT variable
console.log("Final Result: ", sumOfTheNumbers)
