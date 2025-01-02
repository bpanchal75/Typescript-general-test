const personNew = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    isStudent: true,
}
const personNew2:{firstName:string,lastName:string,email:string,isStudent:boolean} = {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    isStudent: true,
}

console.log (personNew2.email);

// Object Merge
const contactInfo = {
    email: "john2@doe.com",
    contactNumber: "1234",
}
const mergedPerson = {...personNew, ...contactInfo}
console.log(mergedPerson)