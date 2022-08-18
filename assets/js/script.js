var hours = $(".hour");
var currentDay = $("#currentDay");
var currentTime = parseInt(moment().hour());
var calendarEvent = {};
//console.log(typeof currentTime);

// Current Day
currentDay.text(moment().format("dddd, LL"));
//console.log(currentDay);

// save event
var saveEvent = function (){
    localStorage.setItem("calendarEvent", JSON.stringify(calendarEvent));
}


hours.each(function(){
    var workTime = parseInt($(this).attr("data-id"))
    console.log(workTime)

    if (workTime < currentTime){
        // current class is removed and "past" class is added
        $(this).next().addClass("past");
        console.log("past");
    } 
    else if (workTime > currentTime){
        // if workTime is less than currentTime then "future" class is added
        $(this).next().addClass("future");
        console.log("future");
    }
    else {
        // if it is the "currentTime" then "present" class is added
        $(this).next().addClass("present");
        console.log("present");
    }

});

// edit event
$(".description").on("click", function(){
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>").addClass("col-10 description").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

// save event when save button is clicked
$(".saveBtn").click(function(){
    saveEvent();
});

