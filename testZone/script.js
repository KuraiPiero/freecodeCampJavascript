import show from "./console.js";

/*backPack is the "keyword", 
"const" means you can change the properties inside the container but can't remove or replace the object from the container 
if there are "{}" means it will be an object*/
const backPack = {
  /*name is a key*/ name: "Everyday Backpack" /*"Everyday Backpack" is it value*/,
  /*this is a key*/ volume: 30 /*this is a value*/,
  /*this is a key*/ color: "Gray" /*this is a value*/,
  /*this is a key*/ pocketNum: 15 /*this is a value*/,
  /*"strapLength" list*/
  strapLength: {
    left: 26,
    right: 15,
  },
  lidOpen: false,
  toggleLid: (lidStatus) => (this.lidOpen = lidStatus),
  newStrapLength: (lengthLeft, lengthright) => (
    (this.strapLength.left = lengthLeft), (this.strapLength.right = lengthright)
  ),
};
