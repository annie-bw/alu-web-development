//anything defined before a function is a global variable and can be used anywhere
//if we have 2 variables with the same name, one is a global one, another is used in a function, as long as we are calling the function,
//..[cont]the local one outweighs the global variable,
//if we go outside of the function the global var will be called
//return can be used t return values id it is not there, nothing will show on the console

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();//remember shift removes the first item in the list and displays that removed item
}

var testArr=[1,2,3,4,5];

console.log("Before: "+JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("after: "+JSON.stringify(testArr));

//will return
//Before : [1,2,3,4,5]
//1
//after: [2,3,4,5,6]


//boolean functions

function verifyStatement(trueorfalse) {
    if (trueorfalse) {
        return "yes, teh statement is true"

    }

    return "No, that statement is false"
}

console.log(verifyStatement(true));

