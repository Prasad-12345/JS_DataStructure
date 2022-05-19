/*
* Author: Prasad
* Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
*/
let palindromeArray = []

//function return true if number is palindrome
function isPalindrome(number){
    let reverseNumber = number.toString().split("").reverse();
    if(number == reverseNumber.join("")){
        return true;
    }
    else{
        return false;
    }
}

//pushing palindrome numbers to array
for(let i = 0; i <= 100; i++){
    if(i >= 10 && isPalindrome(i)){
        palindromeArray.push(i);
    }
}

console.log("Palindrome array is: " + palindromeArray)