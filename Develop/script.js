var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");
var toDoItems = [];
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
//using moment.js to set date and time

function initializeSchedule(){
    $timeBlocks.each(function(){
    var $thisBlock = $(this);
    var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
    
    var todoObj = {
        hour: thisBlockHr,
        text: "",
        }
       
    toDoItems.push(todoObj);
})}