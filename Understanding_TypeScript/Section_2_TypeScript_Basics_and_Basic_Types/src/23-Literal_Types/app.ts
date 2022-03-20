const number2 = 2.8; // Literal type 2.8

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result: number | string;
  if (resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Prince", "Kumar", "as-text");
console.log(combinedNames);
