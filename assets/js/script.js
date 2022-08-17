var hours = $(".hour");
var currentDay = $("#currentDay");
var currentTime = parseInt(moment().format("h"));
//console.log(typeof currentTime);

// Current Day
currentDay.text(moment().format("h"));
//console.log(currentDay);


hours.each(function(){
    let workTime = parseInt($(this).attr("data-id"))
    console.log(workTime)
    if (workTime < currentTime){
        console.log("past")
    } 
    else if (workTime > currentTime){
        console.log("future")
    }
    else {
        console.log("present")
    }

});
