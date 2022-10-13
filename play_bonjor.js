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
