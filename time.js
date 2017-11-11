var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM"

if (MINUTE > 30){
    MINUTE = "almost"
    HOUR = HOUR + 1
}
else {
    MINUTE = "just after"
}
if (PERIOD == "AM"){
    PERIOD = "in the morning"
}
else {
    PERIOD = "in th evening"
}

{
    console.log("Its", MINUTE, HOUR, PERIOD);
}

