var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
         "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },

    "1245" : {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },

    "5439": {
          "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function UpdateRecords(id, prop, value) {
    if (collectionCopy[id]) {
        if (value === "") {
            // Delete the property
            delete collectionCopy[id][prop];
        } else if (prop === "tracks") {
            // If tracks property doesn't exist, create it as an array
            if (!collectionCopy[id].hasOwnProperty("tracks")) {
                collectionCopy[id]["tracks"] = [];
            }
            // Push the new value to the tracks array
            collectionCopy[id]["tracks"].push(value);
        } else {
            // Update or set the property
            collectionCopy[id][prop] = value;
        }
    }
    return collectionCopy;
}

console.log(UpdateRecords("2468", "artist", "Quincy")); // Changes "Prince" to "Quincy"
console.log(UpdateRecords("2548", "tracks", "New Song")); // Adds "New Song" to tracks array
console.log(UpdateRecords("5439", "album", "")); // Deletes the album property
