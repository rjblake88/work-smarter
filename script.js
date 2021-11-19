//using moment.js to set date and time
$(document).ready(function(){
var $currentDay = $("#currentDay");
var $timeBlocks = $(".time-block");
var $scheduleArea = $(".schedule");
var toDoItems = [];
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
$(".saveBtn").on("click",function(){
  // var $thisBlock = $(this).parent();
  // var hourToUpdate = $(this).parent().attr("data-hour");
  // var itemToAdd = (($(this).parent()).children("textarea")).val();

  // for (var j = 0; j < toDoItems.length; j++){
  //   if (toDoItems[j].hour == hourToUpdate){
  //     //set its text to what was added to textarea
  //     toDoItems[j].text = itemToAdd;
  //   }
  // }
  var toDoItem = $(this).siblings("textarea").val()
  var key = $(this).siblings("textarea").attr("id")
  localStorage.setItem(key, toDoItem);
  console.log(toDoItem)
  renderSchedule();
})



function initializeSchedule(){
  $("#hour-9").val(localStorage.getItem("hour-9"))
  $("#hour-10").val(localStorage.getItem("hour-10"))
  $("#hour-11").val(localStorage.getItem("hour-11"))
  $("#hour-12").val(localStorage.getItem("hour-12"))
  $("#hour-13").val(localStorage.getItem("hour-13"))
  $("#hour-14").val(localStorage.getItem("hour-14"))
  $("#hour-15").val(localStorage.getItem("hour-15"))
  $("#hour-16").val(localStorage.getItem("hour-16"))
  $("#hour-17").val(localStorage.getItem("hour-17"))
    $timeBlocks.each(function(){
    var $thisBlock = $(this);
    var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
    
    var todoObj = {
        hour: thisBlockHr,
        text: "",
        }
       
    toDoItems.push(todoObj);
});}
initializeSchedule()
//color change with time
function setUpTimeBlocks(){
    $timeBlocks.each(function(){
      var $thisBlock = $(this);
      var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

      if (thisBlockHr == currentHour) {
        $thisBlock.addClass("present").removeClass("past future");
      }
      if (thisBlockHr < currentHour) {
        $thisBlock.addClass("past").removeClass("present future");
      }
      if (thisBlockHr > currentHour) {
        $thisBlock.addClass("future").removeClass("past present");
      }
    });
};

// function renderSchedule(){
//     toDoItems = localStorage.getItem("todos");
//     toDoItems = JSON.parse(toDoItems);

//     for (var i = 0; i < toDoItems.length; i++){
//       var itemHour = toDoItems[i].hour;
//       var itemText = toDoItems[i].text; 
     
//       $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
//     }
  
//     console.log(toDoItems);
// };




  
    
    setUpTimeBlocks();
    
    // if(!localStorage.getItem("todos")){
      initializeSchedule();
    // }
    
    $currentDay.text(currentDate);
    // renderSchedule();
    // $scheduleArea.on("click", "button", saveHandler);    
})
