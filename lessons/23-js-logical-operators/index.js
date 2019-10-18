const hour = prompt ("Enter the current hour :");
if (hour < 0 || hour > 23)
{
    // alert("test");
    alert(" Input is incorrect ");
}
else if (hour <8 || hour >= 18)
{
    alert(" Hour is outside of office hours");
}
else
{
    alert(" We are open.");
}