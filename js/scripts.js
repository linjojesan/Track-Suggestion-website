$(document).ready(function() {
  $("#coding-survey").submit(function(event) {
      event.preventDefault();

    var question1 = $("select#font-question1").val();
    var question2 = $("select#big-tech").val();
    var question3 = $("select#start-up").val();
    var question4 = $("select#security").val();
    var question5 = $("select#mobile").val();

    var collate = (question1 + question2 + question3 + question4 + question5)

    if (question1 === yes) {

    }

    console.log(collate);



















  });

});
