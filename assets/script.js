// Build HTML - bootstrap

// Grab current hours for scheduler - moment.hours
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")) 

var showHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var hours = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]



// Add hours to .container
for (var i = 0; i < hours.length; i++) {
   var newRow = $(`<div class='row time-blocks' id=${hours[i]}></div>`)
   $(".container").append(newRow)
   var hourCol = $(`<div class='col-1 time-block'>${showHours[i]}</div>`)
   var text = $(`<textarea class="col-10 description" data-time=${hours[i]}>Enter your notes here...</textarea>`)
   var buttonCol = $('<button class="col-1 saveBtn">Save</button>')
   $(newRow).append(hourCol, text, buttonCol);
}

// One click event for save button and put event on that class
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, value)
})

// var obj = {name: Caren, age: 28}
    

// Color coded hours - store numeric value in localStorage
function colorChange() {
    $(".description").each(function(){
        var currentHour = moment().hours()
        var textArea = parseInt($(this).data("time"))
        console.log(currentHour);
        if (textArea < currentHour) {
            $(this).addClass("past")
        }
        else if (textArea === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    
    });
};
colorChange();

$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));


})







