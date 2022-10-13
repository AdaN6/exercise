class Cat {
  constructor() {
    this._tiredness = 0;
    this._hunger = 0;
    this._loneliness = 0;
    this._happiness = 0;
  }

  // Create methods that increase/decrease these properties
  play(tirednessVal, lonelinessVal, hungerVal) {
    this._tiredness += tirednessVal;
    this._loneliness -= lonelinessVal;
    this._hunger += hungerVal;
  }
  sleep(tirednessVal, lonelinessVal) {
    this._tiredness -= tirednessVal;
    this._loneliness += lonelinessVal;
  }

  eat(hungerVal, happinessVal) {
    this._hunger -= hungerVal;
    this._happiness += happinessVal;
  }

  getAngry(happinessVal) {
    this._happiness -= happinessVal;
  }

  printStatus() {
    const isTired = "The cat is tired";
    const isNotTired = "The cat is not tired";
    const isHungry = "The cat is hungry";
    const isNotHungry = "The cat is not hungry";
    const isLonely = "The cat is lonely";
    const isNotLonely = "The cat is not lonely";
    const isHappy = "The cat is happy";
    const isNotHappy = "The cat is not happy";

    if (this._tiredness > 10) {
      console.log(isTired);
    } else {
      console.log(isNotTired);
    }
    if (this._hunger > 10) {
      console.log(isHungry);
    } else {
      console.log(isNotHungry);
    }
    if (this._loneliness > 10) {
      console.log(isLonely);
    } else {
      console.log(isNotLonely);
    }
    if (this._happiness > 10) {
      console.log(isHappy);
    } else {
      console.log(isNotHappy);
    }
  }
}

const garfield = new Cat();

garfield.play(8);
garfield.getAngry(9);
garfield.eat(8);
garfield.play(6);
garfield.printStatus();


const getRandomMood = () => {
  let getRandomMood = Math.floor(Math.random() * 5);
  switch (getRandomMood) {
    case 0:
      return garfield.play(8);
      break;
    case 1:
      return garfield.getAngry(9);
      break;
    case 2:
      return garfield.eat(8);
    case 3:
      return garfield.play(6);
    break;
    case 4:
        return garfield.PrintStatus();
  }
  console.log(getRandomMood());
};
getRandomMood();