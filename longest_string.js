



const findlongestWord = () => {
    
    let splitSentence =
      "The emergency scheme started after September's mini-budget, which spooked markets and drove up borrowing costs.".split(' '
      );
    let longestWordNum = 0;
    let longestWord = '';

    for (let i = 0; i < splitSentence.length; i++) {
      if (splitSentence[i].length > longestWordNum) {
        longestWordNum = splitSentence[i].length;
        longestWord = splitSentence[i];
      }
    }
        console.log(`word "${longestWord}" is the longest being ${longestWordNum} characters long`)
}

findlongestWord()
  


