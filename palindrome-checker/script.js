import show from "./console.js";

function palindrome(str) {
  let rigthSide = "";
  let leftSide = "";

  for (let i = 0; i < str.length + 1; i++) {
    let rightIndex = parseInt(i);
    if (
      RegExp(/^\p{L}/, "u").test(str[i]) ||
      /^-?[\d]+(?:e-?\d+)?$/.test(str[i])
    ) {
      if (str[rightIndex] != undefined) {
        rigthSide += str[rightIndex].toLocaleLowerCase();
      }
    }
  }
  for (let j = 1; j < str.length + 1; j++) {
    if (
      RegExp(/^\p{L}/, "u").test(str[str.length - j]) ||
      /^-?[\d]+(?:e-?\d+)?$/.test(str[str.length - j])
    ) {
      if (str[str.length - j] != undefined) {
        leftSide += str[str.length - j].toLocaleLowerCase();
      }
    }
  }
  return rigthSide == leftSide;
}

show(palindrome("eye"));
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
