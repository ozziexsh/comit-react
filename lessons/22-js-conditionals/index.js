alert ("Enter two numbers to see if the first is greater than the second");
const firstNum = prompt ("What is the first number?");
const secondNum = prompt ("What is the second number?");
if (firstNum > secondNum)
{
    console.log(firstNum + " is greater than " + secondNum);
}
if (firstNum < secondNum)
{
    console.log( firstNum +" is less than " + secondNum);
}
else
{
    console.log("It is the same");
}
