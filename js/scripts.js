$(document).ready(function() {
  $("form#programming-questions").submit(function(event) {
    event.preventDefault();
    var input = parseInt$("#fonts").val();
    console.log("working");

  });

});
