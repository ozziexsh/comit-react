let i=0;
function evenNumbers() {
    for (i=0; i<=50; i++)
    {
        let j=i*2;
        console.log(j);
    }
}
evenNumbers();

function showUser() {
    let name = prompt("Your name:");
    let age = prompt("Your age:");
    let telephone = prompt("Your telephone number: ");
    let street = prompt("Your street: ");
    let postalCode = prompt("Your Postal code:");
    let status = prompt("Your marital status");

    console.log("Your Name: ", name);
    console.log("Your age: ", age);
    console.log("Your Telephone number", telephone);
    console.log("Your street: ", street);
    console.log("Your Postal code", postalCode);
    console.log("Your status", status);
}

showUser();

let evenNumber=0;
function showeven() {
    for(evenNumber=0;evenNumber<=100; evenNumber=evenNumber+2){
        console.log(evenNumber);
    }
}
showeven();
showeven();
showeven();
showeven();
showeven();

// Fibonacci

let a=0;
let b=1;
let c=0;
let d=0;
let maxValue = prompt("Enter Maximum value: ")

function fib () {
    while(a<=maxValue || b<=maxValue) {
        if (a<=maxValue){
            console.log(a);
        }
        else {
        break;
        }
        if (b<=maxValue){
            
            console.log(b);
        }
        else{
            break;
        }
        c=a+b;
        d=c+b;
        a=c;
        b=d;        
    }
}
fib ();