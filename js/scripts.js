$(document).ready(function() {
  $("#coding-survey").submit(function(event) {
      event.preventDefault();

    var question1 = $("select#font-question1").val();
    var question2 = $("select#big-tech").val();
    var question3 = $("select#start-up").val();
    var question4 = $("select#security").val();
    var question5 = $("select#mobile").val();



    if (question1 === "yes" && question2 === "no" && question3 === "no" && question4 === "no" &&  question5 === "no") {

    $("#design").show();

  }  if ( question2 === "yes" && question1 === "no" && question3 === "no" && question4 === "no" && question5 === "no") {

    $("PHP").show();
  }



//   } else if (question1 === "no" && question2 === "yes" && question3 === "no" && question4 === "no" && question5 === "no") {
//
//     $("#PHP").show();
//
//   } else if (question1 === "no" && question2 === "" && question3 === "yes" && question4 === "no" && question5 === "no") {
//
//     $("#ruby").show();
//
// }   else if (question1 === "no" && question2 === "no" && question3 === "no" && question4 === "yes" && question5 === "no") {
//
//     $("#c-sharp").show();
//
// }   else if (question1 === "no" && question2 === "no" && question3 === "no" && question4 === "no" && question5 === "yes") {
//     $("#android").show();
// }
//


});

});
