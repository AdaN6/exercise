class Cat {
  constructor(name) {
    this._name = name;
    this._tiredness = "tired";
    this._hunger = "hungry";
    this._loneliness = "lonely";
    this._happiness = "happy";
  }

  sleep() {
    console.log(`${this._name} is ${this._tiredness}`);
  }

  feed() {
    console.log(`${this._name} is ${this._hunger}`);
  }

  pet() {
    console.log(`${this._name} is ${this._loneliness}`);
  }

  happy() {
    console.log(`${this._name} is ${this._happiness}`);
  }
}

const paw = new Cat("paw");
paw.sleep();
paw.feed();
paw.pet();
paw.happy();

const getRandomMood = () => {
  let getRandomMood = Math.floor(Math.random() * 4);
  switch (getRandomMood) {
    case 0:
      return paw.sleep();
      break;
    case 1:
      return paw.feed();
      break;
    case 2:
      return paw.pet();
    case 3:
      return paw.happy();
  }
  console.log(getRandomMood());
};
getRandomMood();
