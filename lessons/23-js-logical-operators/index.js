let hour = prompt('Enter the hour between 0 and 23.');
alert(hour);

if (hour < 0 || hour > 23) {
    alert('Input is not correct!')
} else if (hour < 8 || hour >= 18) {
    alert('Hour is outside office hours!')
} else alert('We are open! Woot!');

