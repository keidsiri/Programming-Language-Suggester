//business logic
function addResult(a,b,c,d) {
  return a + b + c + d ;
}





// user interface
$(document).ready(function() {
  $(".userInput").submit(function(event) {
    event.preventDefault();
    $(".result").show();
    const genderInp = parseInt($("#gender").val());
    // console.log(genderInt);
    const musicInp = parseInt($("#typemusic").val());
    const colorInp = parseInt($("#color").val());
    const animalInt = parseInt($("#animal").val());
    const totalResult = addResult(genderInp, musicInp, colorInp, animalInt);
    $(".reult").text(codingLanguage(totalResult);)
  });
});








// result 0-4 : Swift
// result 5-7 : Javascript
// result 8-10 : Python 
// result 11-13 : Ruby


