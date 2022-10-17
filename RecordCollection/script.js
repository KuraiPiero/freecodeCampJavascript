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
// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: ["Addicted to Loe"],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (records[id].hasOwnProperty(prop) == false) {
    records[id][prop] = [value];
  } else if (value != "") {
    records[id][prop].push(value);
  } else if (value == "") {
    delete records[id][prop];
  }
  return records;
}

show(recordCollection);
updateRecords(recordCollection, 5439, "artist", "ABBA");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
show(recordCollection[5439].artist == "ABBA");
show(recordCollection[5439].tracks == "Take a Chance on Me");
show(recordCollection[2548].hasOwnProperty("artist") == false);
show(recordCollection[1245]["tracks"].at(-1) == "Addicted to Love");
show(recordCollection[2468]["tracks"].at(0) == "1999");
show(recordCollection[2548].hasOwnProperty("tracks") == false);
show(recordCollection[1245]["albumTitle"] == "Riptide");
show(recordCollection);
