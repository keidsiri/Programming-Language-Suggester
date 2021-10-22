//business logic
function addResult(a,b,c,d) {
  return a + b + c + d ;
}

function codingLanguage(result) {
  if (result > 3 && result <= 7 ) {
    $(".swift").show();
    $(".javascript").hide();
    $(".python").hide();
    $(".ruby").hide();
  } else if (result > 7 && result <= 11 ) {
    $(".swift").hide();
    $(".javascript").show();
    $(".python").hide();
    $(".ruby").hide();
  } else if (result > 11 && result <= 15 ) {
    $(".swift").hide();
    $(".javascript").hide();
    $(".python").show();
    $(".ruby").hide();
  } else if (result > 15 && result <= 20 ) {
    $(".swift").hide();
    $(".javascript").hide();
    $(".python").hide();
    $(".ruby").show();
  } else {
    alert("Please select the answer!");
  }
}



// user interface logic
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    const edInp = parseInt($("#education").val());
    const backInt = parseInt($("#background").val());
    const colorInp = parseInt($("#color").val());
    const animalInt = parseInt($("#animal").val());
    const totalResult = addResult(edInp, backInt, colorInp, animalInt);
    $("#name").text(codingLanguage(totalResult));
    $(".result").show();
  });
});


// $(".swift").show();

