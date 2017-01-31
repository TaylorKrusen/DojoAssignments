var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if (PERIOD == "AM" && MINUTE >=40)
{
    console.log("It's almost",HOUR+1,"in the morning");
}
if (PERIOD == "PM" && MINUTE <=20)
{
    console.log("It's just after",HOUR,"in the evening");
}
