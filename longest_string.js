



const findlongestWord = () => {
    
    let splitSentence =
      "The emergency scheme started after September's mini-budget, which spooked markets and drove up borrowing costs.".split(' '
      );
    let longestWord = 0;

    for (let i = 0; i < splitSentence.length; i++) {
      if (splitSentence[i].length > longestWord) {
        longestWord = splitSentence[i].length;
      }
    }
  
    return longestWord;
}

console.log(findlongestWord());

