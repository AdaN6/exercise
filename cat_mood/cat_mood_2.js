class Cat {
  constructor(name, age, tiredness, hunger, loneliness, happiness) {
    this.name = name;
    this.age = age;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
  }

  sleep(hours) {
    return this.tiredness - hours;
  }
  feed(pellets) {
    return this.hunger - pellets;
  }
  pet(hugs) {
    return this.happiness + hugs;
  }

  talk() {
    if (this.tiredness < 5) {
      return `The cat named ${this.name} is very grumpy.`;
    }
    if (this.hunger < 10) {
      return `${this.name} has a hunger level of ${this.hunger} and could really do with a bowl of food.`;
    }
    if (this.happiness < 5) {
      return `${this.name} is sad! Go take car of your cat! Otherwise it won't make it past ${this.age} years old.`;
    }
  }
}

let catOne = new Cat("Charlie", 6, 15, 10, 3, 4);
console.log(catOne);

console.log(catOne.sleep(2));
console.log(catOne.feed(5));
console.log(catOne.pet(2));
console.log(catOne.talk());

let catTwo = new Cat("Dale", 4, 5, 4, 1, 1);
console.log(catTwo);

console.log(catTwo.talk());


let randomTiredness = Math.floor(Math.random() * 4);
let randomHappiness = Math.floor(Math.random() * 4);
let randomHunger = Math.floor(Math.random() * 4);
let randomLoneliness = Math.floor(Math.random() * 4);

let catOne = new Cat(
  "Charlie",
  randomTiredness,
  randomHappiness,
  randomHunger,
  randomLoneliness
);

]
