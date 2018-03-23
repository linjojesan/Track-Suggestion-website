$(document).ready(function() {
  $("#coding-survey").submit(function(event) {
      event.preventDefault();

    var question1 = $("select#font-question1").val();
    var question2 = $("select#big-tech").val();
    var question3 = $("select#start-up").val();

    var collate = (question1, question2, question3)
    console.log(collate);















  });

});
