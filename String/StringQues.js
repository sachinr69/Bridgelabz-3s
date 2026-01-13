//Q1
let str = "Java is fun";
let result = str.split(" ").reverse().join(" ");
console.log(result);

//Q2
function isRotation(s1, s2) {
  return s1.length === s2.length && (s1 + s1).includes(s2);
}
console.log(isRotation("ABCD", "CDAB")); // true

//Q3
function runLengthEncode(str) {
  let res = "", count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      res += str[i] + count;
      count = 1;
    }
  }
  return res;
}
console.log(runLengthEncode("aaabbc")); // a3b2c1

