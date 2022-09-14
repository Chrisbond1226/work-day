// const moment = require("moment");

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var hourText = $(this).siblings(".userInput").val();
    console.log(hourText);

    var time = $(this).parent().attr("id");
    console.log(time);

    localStorage.setItem(time, hourText);
  });

  function timeBlockUpdater() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id"));

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).removeClass("past");
        $(this).addClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
    });
  }

  timeBlockUpdater();

  $("#0900 .userInput").val(localStorage.getItem("0900"));
  $("#1000 .userInput").val(localStorage.getItem("1000"));
  $("#1100 .userInput").val(localStorage.getItem("1100"));
  $("#1200 .userInput").val(localStorage.getItem("1200"));
  $("#1300 .userInput").val(localStorage.getItem("1300"));
  $("#1400 .userInput").val(localStorage.getItem("1400"));
  $("#1500 .userInput").val(localStorage.getItem("1500"));
  $("#1600 .userInput").val(localStorage.getItem("1600"));
  $("#1700 .userInput").val(localStorage.getItem("1700"));
});

var findTime = moment().format("YYYY-MM-DD");
var saveTasks = [];

var save = function () {
  localStorage.setItem("test", JSON.stringify(saveTasks[saveTasks.length - 1]));
  console.log(saveTasks);
};

var load = function () {
  var taskLoaded = localStorage.getItem("test");
  if (!taskLoaded) {
    return false;
  }

  taskLoaded = JSON.parse(taskLoaded);
  console.log("loaded", taskLoaded);
  $();
};

var displayTime = function () {
  var showTime = document.createTextNode(findTime);
  document.querySelector("#currentDay").appendChild(showTime);
};

load();
displayTime();
