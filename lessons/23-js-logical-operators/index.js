let hr = prompt("Enter the current hour(out of 0-23)", 0);
if (hr < 0 || hr > 23) {
  alert("Sorry! you entered wrong hour");
} else if (hr < 8 || hr >= 18) {
  alert("Hour is outside of office hours");
} else if (hr >= 8 || hr < 18) {
  alert("Welcome! we are open");
}
