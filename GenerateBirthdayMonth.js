/*
* Author: Prasad
* Write a Program to generate a birth month of 50 individuals
 *between the year 92 & 93. Find all the individuals having birthdays in the same month. Store it to finally print.
*/
let count = 1;
let birthdayMonth = new Map();

//generate random month
function generateBirthdayMonth(){
    return Math.floor(Math.random() * 11 + 1);
}

//storing people in map according to birthday month
while(count <= 50){
    let month = generateBirthdayMonth();
    let personArray = [];
    if(birthdayMonth.has(month))
        personArray = birthdayMonth.get(month);
    personArray.push(count);
    birthdayMonth.set(month,personArray);
    count++;
}

console.log("\nPeople with same birthday month");
for(let [key,value] of birthdayMonth.entries()){
    console.log("Month : " + key + "\tPeople : [" + value+ "]");
}