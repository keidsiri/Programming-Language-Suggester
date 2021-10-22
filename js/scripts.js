//business logic
function addResult(a,b,c,d) {
  return a + b + c + d ;
}

function codingLanguage(result) {
  if (result > 3 && result <= 6 ) {
    $(".swift").show();
    $(".javascript").hide();
    $(".python").hide();
    $(".ruby").hide();
  } else if (result > 6 && result <= 9 ) {
    $(".swift").hide();
    $(".javascript").show();
    $(".python").hide();
    $(".ruby").hide();
  } else if (result > 9 && result <= 12 ) {
    $(".swift").hide();
    $(".javascript").hide();
    $(".python").show();
    $(".ruby").hide();
  } else if (result > 12 && result <= 15 ) {
    $(".swift").hide();
    $(".javascript").hide();
    $(".python").hide();
    $(".ruby").show();
  } else {
    alert("Please fill out the question!");
    // return "Please fill out all the question";
  }
}



// user interface logic
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    const edInp = parseInt($("#education").val());
    const musicInp = parseInt($("#typeMusic").val());
    const colorInp = parseInt($("#color").val());
    const animalInt = parseInt($("#animal").val());
    const totalResult = addResult(edInp, musicInp, colorInp, animalInt);
    $(".result").text(codingLanguage(totalResult));
    $(".result").show();
  });
});


// $(".swift").show();

