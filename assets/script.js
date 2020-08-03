// Build HTML - bootstrap

// Grab current date for the top of the scheduler - moment JS
function getLocalStorage() {
    var value = localStorage.getItem();

    }
// Grab current hours for scheduler - moment.hours
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")) 

var hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var colorChanges = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var i = 0


// Add hours to .container
for (var i = 0; i < hours.length; i++) {
   var newRow = $("<div class='row'></div>")
   $(".container").append(newRow)
   var hourCol = $(`<div class='col-1 time-block'>${hours[i]}</div>`)
   var text = $(`<textarea class="col-10" data-time=${colorChanges[i]}>Enter your notes here...</textarea>`)
   var buttonCol = $('<button class="col-1 saveBtn">Save</button>')
   $(newRow).append(hourCol, text, buttonCol);
}

// One click event for save button and put event on that class
$(".saveBtn").on("click", function () {
    console.log(this)
    var eventText = $(this).attr("data-value")
    var eventId = $(click).val()
    localStorage.setItem(eventText, eventId)
})
    

// Color coded hours - store numeric value in localStorage
function colorChange() {
    $("textarea").each(function(){
        var currentHour = parseInt(moment().hours())
        var textArea = $('textarea').data('time')
        if (textArea , currentHour) {
            $('textarea').removeClass("present")
            $('textarea').removeClass("future")
            $('textarea').addClass("past")
        }
        else if (textArea === currentHour) {
            $('textarea').removeClass("past")
            $('textarea').removeClass("future")
            $('textarea').addClass("present")
        }
        else {
            $('textarea').removeClass("past")
            $('textarea').removeClass("present")
            $('textarea').addClass("future")
        }

    });
};
colorChange();
})




// Set interval timer that updates page every hour

// JS- capture all scheduleInput boxes $() input - gives array of all scheduleInput boxes and then you can do .each 

// Loop through scheduleInput box - look at numeric value - If Statement if current time is > row time = add class past  else = present

// One click event for save button and put event on that class

// .THIS will give you the element you clicked and the DOM triversal for which scheduleInput matches

// Save in local storage
// When page loads stored items in local storage are grabed and displayed on page.
