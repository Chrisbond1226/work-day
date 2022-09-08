var findTime = moment().format("LLLL");

var displayTime = function () {
  var showTime = document.createTextNode(findTime);
  document.querySelector("#currentDay").appendChild(showTime);
};

var enterData = function () {};

displayTime();
