let weekdayNumber = prompt("Enter weekday Number: ");

if (weekdayNumber == 1) {
    alert("Today is Monday");
}
else if (weekdayNumber == 2) {
    alert ("Today is Tuesday");
}
else if (weekdayNumber == 3) {
    alert ("Today is Wednesday");
}
else if (weekdayNumber == 4) {
    alert ("Today is Thursday");
}
else if (weekdayNumber == 5) {
    alert ("Today is Friday");
}
else if (weekdayNumber == 6) {
    alert ("Today is Saturday");
}
else if (weekdayNumber == 7) {
    alert ("Today is Sunday");
}
else {
    alert ("EROR : Number not between 1 and 7");
}
let message;
switch (weekdayNumber) {
    case '1':
        message = "Monday";
        break;
    case '2':
        message = "Tuesday";
        break;
    case '3':
        message = "Wednesday";
        break;
    case '4':
        message = "Thursday";
        break;
    case '5':
        message = "Friday";
        break;
    case '6':
        message = "Saturday";
        break;
    case '7':
        message = "day";
        break;
    default:
        message = "EROR : Number not between 1 and 7";
        break;
}
console.log(message);
