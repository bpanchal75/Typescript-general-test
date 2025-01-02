// Array literal
const fruits: string[] = ['Apple', 'Banana', 'Cherry']

// Array Constructor
const numbers: number[] = new Array(1, 2, 3, 4, 5, 6, 7);

//Empty Array
const emptyArray: string[] = [];

console.log(fruits[0], fruits[1]);

numbers[2] = 10;
console.log(numbers[2]);

//Push new number
numbers.push(11);
console.log(numbers);

//Remove last number
numbers.pop();
console.log(numbers);

//Shift method - remove first number
numbers.shift();
console.log(numbers);

//unshift
numbers.unshift(1);
console.log(numbers);

//slice
const slicedArray = numbers.slice(1, 3);
console.log(slicedArray);

//Map method
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

//Filters
const filterArray = numbers.filter((num) => num > 2);
console.log(numbers)
console.log(filterArray);