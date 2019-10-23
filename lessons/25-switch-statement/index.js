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
switch (weekdayNumber) {
    case '1':
        alert ("Today is Monday");
        break;
    case '2':
        alert ("Today is Tuesday");
        break;
    case '3':
        alert ("Today is Wednesday");
        break;
    case '4':
        alert ("Today is Thursday");
        break;
    case '5':
        alert ("Today is Friday");
        break;
    case '6':
        alert ("Today is Saturday");
        break;
    case '7':
        alert ("Today is Sunday");
        break;
    default:
        alert ("EROR : Number not between 1 and 7");
        break;
}