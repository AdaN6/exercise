const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 9;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 4;
      break;
    case "saturday":
      return 12;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "you didnt sleep!!";
  }
};

//console.log(getSleepHours('k'));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

//console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(9);

  if (actualSleepHours === idealSleepHours) {
    console.log("you got a perfect amount of sleep!! awesome!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `you slept too much! You have slept ${
        actualSleepHours - idealSleepHours
      } hours more!`
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `you should get some rest because you've slept ${
        idealSleepHours - actualSleepHours
      } hours less than you should.`
    );
  }
};

calculateSleepDebt();
