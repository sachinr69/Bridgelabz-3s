//Q1
let str = "Java is fun";
let result = str.split(" ").reverse().join(" ");
console.log(result);

//Q2
function isRotation(s1, s2) {
  return s1.length === s2.length && (s1 + s1).includes(s2);
}
console.log(isRotation("ABCD", "CDAB")); // true


