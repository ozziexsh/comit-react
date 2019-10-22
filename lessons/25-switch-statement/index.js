let weekday = 5;

console.log("OUTPUT OF IF ELSE:");
if (weekday == 1) console.log("Today is Monday");
else if (weekday == 2) console.log("Today is Tuesday");
else if (weekday == 3) console.log("Today is Wednesday");
else if (weekday == 4) console.log("Today is Thursday");
else if (weekday == 5) console.log("Today is Friday");
else if (weekday == 6) console.log("Today is Saturday");
else if (weekday == 7) console.log("Today is Sunday");
else console.log("Error:Number not between 1-7");

console.log("OUTPUT OF SWITCH:");
switch (weekday) {
  case 1:
    console.log("Today is Tuesday");
    break;
  case 2:
    console.log("Today is Wednesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Error:Number not between 1-7");
}

let message = "Today is";
let day;
console.log("OUTPUT OF SWITCH WITH MESSAGE VARIABLE");
switch (weekday) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    console.log("Error:Number not between 1-7");
}

if (weekday >= 1 && weekday <= 7) console.log(message, day);
