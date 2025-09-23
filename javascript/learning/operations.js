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
