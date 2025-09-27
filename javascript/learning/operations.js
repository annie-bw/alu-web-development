myArray=[1,2,3,4]
//to access the first element
myArray[0]
//to access the last element in the list
lastItemOfTheArray[myArray -1]
//nth last element
anyofLastItems[myArray -3]



//operations
 var a = 1;
var b=4;
var c=5;
var d=6;
var e=10;

a=a+1; //it is equivalent to a++ when it is incrementing by 1
a= a+2; //it is equivalent to a+=2;

b=b-1; //equivalent to b--1; decreasing by only 1
b=b-2; // equivalent to b-=2;
c=c*2; //same as c*=2;
d= d/3; //same with d/=3
e % 3; //will return the remainder of e /3



//arrays are immutable, they can't be changed
//append items
myArray.push(5)//will return [1,2,3,4,5]
//remove the last item
myArray.pop()// will return [1,2,3]
//to remove the first item instead
myArray.shift()//will return [2,3,4]
//to replace th very first item, you first shift the element you want to replace then, unshift it with the other element
myArray.unshift("Annie")//will return ["Annie",2,3,4] same with numbers


longNestedArray=[[1,2,3],[4,5,6],[7,8,9],["bob","joe","don"]]
//to point to number 8 in the nested array we will do
longNestedArray[2][1] /// 2 will refer to the third element in the long array which is [7,8,9]
// the last[1] will mean the second element in that specific chosen array in the long array

function testEqual(num) {
    if (num == 12) {
        return "Equal";
    }
    return "Not equal";
}

console.log(testEqual(10))
//= used for assignment of variables
//== used to see if two elements are equal but allows type conversion, 3 and "3" willbe the same because "3" will be changed to 3
//=== strict equality, now 3!="3"(doesn;t allow type conversion)
//same with != and !== one is strict the other allows type conversion but in a negation way

//objects are dictionaries in javascript

var student={
   "name":"jules", //separated by a colon, has a comma at the end
   "age": 15, //numbes no need to put em in strings
   "friends":[],//can be an array
   "a nickname": "jean Piyeri"

};
//to access an element in the object
var nameValue=student.name;
var friendsValue=student.friends

//bracket notation
var nicknameValue=student["a nickname"]; //when there is space in your property(friends or age or a nickname, urse bracket notation)

//cahnge to a new value
student.name="jules Ineza";
//add a pair to the dictionary
student["class"]="BSE";
//or use dot notation
student.grade="A";
//delete property
delete student.friends;

//while loop
var myArray=[];
var i=0;
while(i<5){
    myArray.push(i);
    i++
    }

//for loops
//for(initialization;condition;what to do after it runs){
//}they're separated by semicolons
var myArray=[];
for(var i=1;i<6;i++){
   myArray.push(i);
}
//in reverse order

for (var i=9;i>0;i-=2){
    myArray.push(i);
}


function multiplyAll(arr){
    var product=1;

    for (var i=0;i<arr.length;i++){
      for (var j=0;j<arr[i].length;j++){
        product*=arr[i][j]
      }
    }
    return product;
}

var product=multiplyAll([[1,2,3],[4,5,6],[7,8],[9,10,11]]);



//do while loops
var i=10;
var array=[];
do {
    array.push(i);
    i++;
}while (i<5)//it executes the code once then does the normal while loop after

//profile lookup


//generating a random number btn max and min

function ourRandomRange(ourMin,ourMax){
return Math.floor(Math.random()*(ourMax-ourMin+1))+ourMin;
}
ourRandomRange(1,9);

//Math.random:will generate any random number
//Math.floor:will round that floating number to the nearest interger iri minimum 12.8 will be 12


//parseInt function:takes a string n turn it into an interger like "32" to 32

function convertToInteger(str){
    return parseInt(str,2)//we will pass in the string the 2 is to let the computer know that it is in binary 2 n is to be turned in base 10(default)
}

convertToInteger("10110")


//ternary(conditional) operator
//condition?statement-if-true:statement-if-false;

function checkEqual(a,b){
    return a==b? true : false;
}

checkEqual(1,"1");

//chain ternary operators

function checkNumber(num){
    return num>0? "positive": num<0? "negative": "zero";
}

//difference btn var and let

let name="Quincy";
let quote;
name="beau";  //reason why let is used than var is to not allow you to declare same variables with the same name, if you want to change that name when u've used let, you write yhat name and change it without redeclaring;

function catTalk(){
    "use strict";//use strict allows us to catch mistakes that can lead to bugs

    catName:"Oliver";
    quote=catName + "says Meow";
}

catTalk();


function printManyTimes(str) {
    "use strict";
var sentence=str+"is cool";
sentence= str+"is amazing!"

for(var i=0; i<str.length; i+=2){
    console.log(sentence);
}

}
printManyTimes("Mosh");

//you can not esit const ij place but if it was an array
const s=[2,3,4];
s[0]=1;
s[1]=2;
s[2]=3;

console.log(s);//prints out [1,2,3 ]
//object.freeze:prevents data mutation
 function freezeObject(){
    "use strict";
    const MATH_CONSTANTS={
        PI:3.14
    };
    Object.freeze(MATH_CONSTANTS);//adding this line will throw an error
    //because we froze them now they are immuta
    try {
        MATH_CONSTANTS.PI=27;
    }catch (ex) {
        console.log(ex);

    }

    return MATH_CONSTANTS.PI;
 }

 const PI= freezeObject();
 console.log(PI);

 //arrow functions

 function add(a,b){
    return a+b;

 }
//its ewuivalent arrow function would be

const add=(a,b) => a+b;
//const (nname of the function)=(parameters)=> (syntax or what you want this function to do)


const myConcat=(arr1,arr2)=> arr1.concat(arr2);

//higher order functions and using map,reduce,filter

const cart=[5,12,8,130,44];
//filter out cheap items(<10);
//add tax(20%);
//sum the total Prince
const total=cart.filter(price =>price >10)
.map(price=>price*1.2)
.reduce((acc,price)=>acc+price,0)


const realNumberArray=[4,5.6,-9.8,3.14,42,6,8,8.34,-2];

const neededNumbers= realNumberArray
.filter(num=>Number.isInteger(num)&& num>0).map(x*x);


console.log(neededNumbers);
//we wanted to filter out numbers that are onyl integers then integers taht are positive numbers, then to the new list we use map function to get the squares pf those numbers

//.map(x means any numbers derived from the list that precedes this map function, it means what was filtered in this case then we make => x*x)

//filter filters out numbers in a long array, map transforms the list completely, like makingth e list rather the square root of numbers in the original list, reduce, it is used to get totals, differences, anything that can take in an array and return a single number

//rest operator
const sum= (function() {
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
};
})();
console.log(sum(1,2,3,4,5));
 //spread operator, it is used as rest operator but it used to spread out an array

 const arr1=["jan", "feb", "march", "apr", "may"];

 let arr2;
 (function(){
    arr2=[...arr1];
    arr1[0]="potato"
 })();
 console.log(arr2); //will display a copy of the roigininal arr1 eventho we changed arr1[0]=potato

 //deconstruction


const AVG_TEMPERATURES={
    today:77.5,
    tomorrow:79
};

function getTempOfTomorrow(avgTemp){
    "use strict";

    const {tomorrow: tempOfTomorrow}=avgTemp;//in the average temperatures, get a field of tomorrow and assign it to the tempOfTomorrow
    return tempOfTomorrow;

}
console.log(getTempOfTomorrow(AVG_TEMPERATURES));
//another example
const numbers= {
    a:2,
    b:3,
    c:5
}

const {x:a,y:b,z:c}=numbers;
