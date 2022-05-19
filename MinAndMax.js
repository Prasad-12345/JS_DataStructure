/*
* Author: Prasad
* Write a program in the following steps
* a. Generates 10 Random 3 Digit number.
* b. Store this random numbers into a array.
* c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/
let count = 0;
let maxCount = 10;
const number = [];
while(count < maxCount){
    number[count] = Math.floor(Math.random() * 900) + 100;
    count++;
}
//if(count < 10){
//    console.log(Math.floor(Math.random() * 900) + 100);
//    count++;
//}
console.log(number);

let max = secondMax = number[1];
let min = secondMin = number[1];

for(let i = 0; i < number.length; i++){
    if(number[i] > max){
        secondMax = max;
        max = number[i];
    }
    else if(number[i] > secondMax && number[i] != max){
        secondMax = number[i];
    }

    if(number[i] < min){
        secondMin = min;
        min = number[i];
    }
    else if(number[i] < secondMin && number[i] != min){
        secondMin = number[i];
    }
}
console.log('Second max number is : ' + secondMax);
console.log('Second min number is : ' + secondMin);

/*
* Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
*/
let temp;
for(let i = 0; i < maxCount; i++){
    for(let j = i; j < maxCount; j++){
        if(number[i] > number[j]){
            temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
}
console.log('sorted number are: ' + number);
console.log('second smallest: ' + number[1]);
console.log('second largest: ' + number[number.length-2]);