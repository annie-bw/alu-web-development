// Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
//if name is not there, return no such name
       for (var i=0;i<contacts.length;i++){
       if (contacts[i].firstName===name){
        if (contacts[i].hasOwnProperty(prop)){
            return contacts[i][prop];
        }else {
            return "property not found";
        }
        }
       }
       return "No such contact";
      }


console.log(lookUpProfile("Akira", "likes"));      // ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Harry", "number"));     // "0994372684"
console.log(lookUpProfile("Sherlock", "age"));     // "No such property"
console.log(lookUpProfile("Tom", "likes"));






//if the prop is not there, return no such property




    //pass in kristian then likes, it should return the array correspnding to it
