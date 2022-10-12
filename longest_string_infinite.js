function stringLength(string) {
  const newArr = string.split(" ");
  const numArr = [];
  newArr.forEach((element) => numArr.push(element.length));
  const max = numArr.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(max);
  newArr.forEach((element) => {
    if (element.length === max) {
      console.log(element);
    }
  });
}

stringLength("The emergency scheme started after September's mini-budget, which spooked markets and drove up borrowing costs."
)