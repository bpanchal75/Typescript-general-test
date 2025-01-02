let person: [string, number] = ['Bhavesh', 25];
console.log(person);

let userName: string = person[0];
let userAge: number = person[1];
console.log(userName, userAge);

person[0] = 'James';
person[1] = 30;

console.log(person);
console.log(userName, userAge);