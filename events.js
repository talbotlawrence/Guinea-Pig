var outputEl = document.getElementById("output-target");

//When any section is clicked the output target text should be 
//You clicked on the {text of the section} section"
function handleSectionClick(event) {     
  var elementText = event.target.innerHTML;
	console.log("elementText", elementText);
  outputEl.innerHTML = "You clicked on the " + elementText + " section";
}

var articleEl = document.getElementsByClassName("article-section");

for (var i = 0; i < articleEl.length; i++) { 
  articleEl.item(i).addEventListener("click", handleSectionClick);
} 

//When the mouse is over the h1 tag, the output element should contain the text 
//"You moved your mouse over the header".
//When the mouse leaves the h1 tag, 
//the output element should contain the text "You left me!!".
var h1El = document.getElementById('page-title');
h1El.addEventListener("mouseover", handleHeaderMouseOver);
h1El.addEventListener("mouseout", handleHeaderMouseOut);
    
function handleHeaderMouseOver(event) {
  outputEl.innerHTML = "You moved your mouse over the header";
} 

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "You left me!!";
} 

//When you type characters into the input field, the output element should mirror 
//the text in the input field.
var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event){
  outputEl.innerHTML = event.target.value;			//study this more!!
}); 

//When you click the "Add color" button, the guinea-pig element's text color should change to blue.
//When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
//When you click the "Capture it" button, the guinea-pig element should have a border added to it.
//When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var thePig = document.getElementById("guinea-pig");

document.getElementById("add-color")
  .addEventListener("click", function(event){
    thePig.classList.toggle("blue");  //study classList too!!
  });

document.getElementById("make-large")
  .addEventListener("click", function(event){
    thePig.classList.toggle("large");
  });

document.getElementById("add-border")
  .addEventListener("click", function(event){
    thePig.classList.toggle("bordered");
  });

document.getElementById("add-rounding")
  .addEventListener("click", function(event){
    thePig.classList.toggle("rounded");
  });

  