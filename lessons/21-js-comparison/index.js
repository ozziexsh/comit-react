alert ("Enter two numbers to see if the first is greater than the second")
const firstNum = prompt ("What is the first number?");
const secondNum = prompt ("What is the second number?");
const accurate = confirm(firstNum > secondNum);
console.log("We are accurate", accurate) ;
