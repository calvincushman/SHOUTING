$(function() {
  $("#whatToShout").submit(function(event) {
    var shout = $("input#userInput").val();

    // var upShout = shout.toUpperCase();

    $(".shouting").text(shout.toUpperCase());

    $(".jumbotron").show();

    event.preventDefault();
  });
});
