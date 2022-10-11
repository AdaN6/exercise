



const longestWord = (str) => {
    let deepSplit = str.split('');
    let longestWord = 0;

    for (let i=0; i < deepSplit.length; i++){
        if (deepSplit[i].length > longestWord) {
            longestWord = deepSplit[i].length;
        }
    }
  
    return longestWord;
}

console.log(longestWord(
  "The emergency scheme started after September's mini-budget, which spooked markets and drove up borrowing costs."
));

