(function () {
  var old = console.log;
  var logger = document.getElementById("newConsole");
  console.log = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        logger.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();
let show = console.log;

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

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /- :) 0-0");
palindrome("five|_/|four");
