// For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("------------------------------") //separator

// While loop

let i = 1
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("------------------------------") //separator

//Do While loop
let T = 0;
do {
    console.log(T);
    T++;
}
while (T <= 10);


console.log("------------------------------") //separator

// Break

for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}