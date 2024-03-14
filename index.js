var q1 = document.querySelector(".butn.top-left");
q1.addEventListener("click", function () {
  document.body.style.backgroundImage = 'url("s1.jpg")';
  var h2Element = document.querySelector("h1");
  h2Element.textContent = "Summer";
  var q9Div = document.getElementById("quote-card"); // Corrected typo here
  q9Div.style.visibility = "visible"; 
});

  
  
    // Add a delay of 2 seconds (2000 milliseconds)
   // setTimeout(function() {
        // Redirect to the second page
        //window.location.href = 'file.html';
   // }, 2000);
  


var q2 = document.querySelector(".butn.top-right");
q2.addEventListener("click", function () {
  document.body.style.backgroundImage = 'url("rain.jpg")';
  var h1Element = document.querySelector("h1");
  h1Element.textContent = "Rainy";
  setTimeout(function() {
    // Redirect to the second page
    window.location.href = 'file3.html';
}, 2000);

});

var q3 = document.querySelector(".butn.bottom-left");
q3.addEventListener("click", function () {
  document.body.style.backgroundImage = 'url("winter.jpg")';
  var h3Element = document.querySelector("h1");
  h3Element.textContent = "Winter";
  setTimeout(function() {
    // Redirect to the second page
    window.location.href = 'file2.html';
}, 2000);

});

var q4 = document.querySelector(".btn.bottom-right");
q4.addEventListener("click", function () {
  document.body.style.backgroundImage = 'url("a1.jpg")';
  var h4Element = document.querySelector("h1");
  h3Element.textContent = "Autumn";
  
  setTimeout(function() {
    // Redirect to the second page
    window.location.href = 'file4.html';
}, 2000);


});


