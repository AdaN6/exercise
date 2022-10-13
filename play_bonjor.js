function areYouPlayingBanjo(name) {
  let input = "R" || "r";

  if (name.charAt(0) === input) {
    console.log(`${name} plays banjo`);
  } else {
    console.log(`${name} does not play banjo`);
  }

  return name;
}

console.log(areYouPlayingBanjo("Rachel"));

function areYouPlayingBanjo(name) {
return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

function areYouPlayingBanjo(name) {

  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;

}

function areYouPlayingBanjo(name) {

  if (name.charAt(0) === "R" || name.charAt(0) === "r")
    return `${name} plays banjo`;
  return `${name} does not play banjo`;
}


// if you only have one if no else, you can write this
//return ((name.charAt(0) === "R" || name.charAt(0) === "r") && `${name} plays banjo`);

