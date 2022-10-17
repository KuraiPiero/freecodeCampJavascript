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

function convertToRoman(num) {
  let romanNumbers = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  let temp = num;
  let arr = [];
  for (let nums in romanNumbers) {
    if (temp > romanNumbers[nums]) {
      arr.push(romanNumbers[nums]);
      show((temp -= arr[0]));
    }
  }
}

convertToRoman(36);
