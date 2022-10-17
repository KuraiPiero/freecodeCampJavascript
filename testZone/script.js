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
    if (RegExp(/^\p{L}/, "u").test(str[i])) {
      if (str[rightIndex] != undefined) {
        rigthSide += str[rightIndex];
      }
    }
  }
  for (let j = 1; j < str.length + 1; j++) {
    if (RegExp(/^\p{L}/, "u").test(str[str.length - j])) {
      leftSide += str[str.length - j];
    }
  }
  show(rigthSide == leftSide);
}

palindrome("A man, a plan, a canal. Panama");
