const input = "turpentine and turtles";
let vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(`i is ${i}`)

  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }

  for (let ny = 0; ny < vowels.length; ny++) {
    //console.log(`vowelIndex is ${ny}`)

    if (input[i] === vowels[ny]) {
      resultArray.push(input[i]);
    }
  }
}

//console.log(resultArray)

let resultString = resultArray.join("").toUpperCase();

console.log(resultString);
