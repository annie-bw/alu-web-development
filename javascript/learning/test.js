const realNumberArray=[4,5.6,-9.8,3.14,42,6,8,8.34,-2];

const neededNumbers= realNumberArray.filter(num=>Number.isInteger(num) && num>0).map(x*x);

console.log(neededNumbers);
//this task is to create arrow function that will take in a number, then the increment number we want it it have, but if the user doesn't specofy it, we go with 1


const increment=(function(){
    return function increment(Number,value=1){
        return number + value;
    }
})();

console.log(increment(5,2));
console.log(increment(5));


//rest operator

const sum= (function() {
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
};
})();
console.log(sum(1,2,3,4,5));
