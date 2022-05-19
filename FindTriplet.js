/*
* Author: Prasad
* Write a Program to show Sum of three Integer adds to ZERO
*/
let flag = 1;
let arraySize = console.log("Enter the size of the array : ");
const readLine = require("readline-sync");
let n = Number(readLine.question());
let integerArray = [];
//n = integerArray.length;

console.log("Enter array values : ");
//input the elements of an array
for(let i = 0; i < n ; i++){
    integerArray.push(Number(readLine.question()));
}
console.log("The Array is : " + integerArray);

//to find the triplets
for (let i = 0; i < integerArray.length-2 ; i++) {
    for (let j = i + 1; j < integerArray.length-1 ; j++) {
        for (let k = j + 1; k <integerArray.length ; k++) {
            if(integerArray[i] + integerArray[j] + integerArray[k] == 0){
                console.log("Found Triplet");
                console.log("Elements are: " + integerArray[i] + " " + integerArray[j]+ " " + integerArray[k]);
                flag=0;
            }
        }
    }
}

if(flag==1)
    console.log("Triplet whose sum is 0 does not exist");