var library = {
    "9780140449136": {
        "title": "The Odyssey",
        "author": "Homer",
        "genres": ["Epic", "Mythology"]
    },
    "9780261103573": {
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genres": ["Fantasy"]
    },
    "9780141439600": {
        "title": "Great Expectations",
        "author": "Charles Dickens",
        "genres": []
    }
};

function updateLibrary(isbn,prop,value){
    if (value===''){
        delete library[isbn][prop];
    }else if (prop==="genres"){
        //check if it exists (the array)

       if(!library[isbn].hasOwnProperty("tracks")){
          (library[isbn]["tracks"]=[]);

    }
        library[isbn]["tracks"].push(value);

       }else {
        library[isbn][prop]=value;
       }
       return library;
    }

// Example calls:
console.log(updateLibrary("9780140449136", "author", "Anonymous")); // Changes author to "Anonymous"
console.log(updateLibrary("9780261103573", "genres", "Adventure")); // Adds "Adventure" to genres array
console.log(updateLibrary("9780141439600", "title", "")); // Deletes the title property
