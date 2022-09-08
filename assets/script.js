var findTime = moment().format("LLLL");

var displayTime = function () {
  var showTime = document.createTextNode(findTime);
  document.querySelector("#currentDay").appendChild(showTime);
};

$(".list-group").on("click", "p", function () {
  var text = $(this).text().trim();

  var textInput = $("<textarea>").val(text);

  $(this).replaceWith(textInput);

  textInput.trigger("focus");
});

displayTime();
