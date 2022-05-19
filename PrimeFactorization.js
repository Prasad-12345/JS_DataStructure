/*
* Author: Prasad
* Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
*/
console.log('Enter nubmber');
const readLine = require("readline-sync");
let num = Number(readLine.question());
console.log(num);
let primeFactors = [];

//To find the prime factors
for(let i = 2; i < num; i++){
    if(num % i == 0){
        num = num / i;
        primeFactors.push(i);
    }
}

if(num != 1){
    primeFactors.push(num);
}
console.log('Prime factors of' + " "+ num + " " + 'are')
console.log(primeFactors);