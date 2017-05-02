$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var items = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    var upper = items.map(function(item) {
      return $("#item" + item).val().toUpperCase();
    });

    var alph = upper.sort();

    alph.forEach(function(x) {
      $("#main-form").hide();
      $("#list").append("<li>" + x + "</li>");
    });
    // array1($(".item").val());


    // var anything = $("#anything").val().split(", ");
    // console.log(anything)

  });
});
