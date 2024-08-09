
// Task 1

let word = "radar";
let isPalindrome = true; 

for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false; 
        break; 
    }
}

console.log(isPalindrome); 

// Task 2

let array = [1, 2, 3, 4, 3, 2, 1];
let elementToRemove = 3;
let newArray = [];


for (let i = 0; i < array.length; i++) {
    if (array[i] !== elementToRemove) {
        newArray.push(array[i]);
    }
}

console.log(newArray); 

// Task 3

let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i; 
    }
}

console.log(sum); 

// Task 4

let array1 = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let sum1 = 0;


for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}

let average = sum1 / array1.length;

console.log(average); 

// Task  5

let number = 123456;
let numString = number.toString();
let count = 0;


for (let i = 0; i < numString.length; i++) {
    count++;
}

console.log(count); 



