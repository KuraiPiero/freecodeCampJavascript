import show from "./console.js";

const coffeMaker = {
  name: "Nespresso",
  color: "Cromed and black",
  timer: function () {
    let countTo = 60;
    for (let i = 0; i < countTo; i++) {
      show(i);
    }
  },
};
show(7);
