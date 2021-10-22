//business logic
function addResult(a,b,c,d) {
  return a + b + c + d ;
}

function codingLanguage(result) {
  if (result > 3 && result <= 6 ) {
    $(".swift").show();
  } else if (result > 6 && result <= 9 ) {
    return "Your programming language suggestion is : Javascript";
  } else if (result > 9 && result <= 12 ) {
    return "Your programming language suggestion is : Python";
  } else if (result > 12 && result <= 15 ) {
    return "Your programming language suggestion is : Ruby";
  } else {
    alert("Please fill out all the question!");
    // return "Please fill out all the question";
  }
}



// user interface logic
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    $(".result").show();
    const edInp = parseInt($("#education").val());
    const musicInp = parseInt($("#typeMusic").val());
    const colorInp = parseInt($("#color").val());
    const animalInt = parseInt($("#animal").val());
    const totalResult = addResult(edInp, musicInp, colorInp, animalInt);
    $(".result").text(codingLanguage(totalResult));
  });
});


// $(".swift").show();

