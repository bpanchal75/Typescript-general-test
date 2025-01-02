function hi() {
    console.log("This is the function");
}

hi();

function calucateTotal(price: number, quantity: number) {
    return price * quantity;
}

const total = calucateTotal(2, 10);
console.log(total);

function greet(name: string, greetMessage: string) {
    if (greetMessage) {
        return `Hi ${name},${greetMessage}`
    } else {
        return `Hi ${name}`
    }
}

console.log(greet("bhavesh", "Hello"));
// @ts-ignore
console.log(greet("bhavesh"));

function add(a: number = 2, b: number = 0) {
    console.log(a + b);
}

//Arrow Function

const multiply = (a: number, b: number): number => a * b;

console.log(multiply(2, 3));

let y=5, z=5;
type MatchOperator = (a: number, b: number) => number;
const add2: MatchOperator = (y,z)  => y+z;
console.log(add2(7,8));