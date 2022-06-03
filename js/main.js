const form = document.querySelector("form");
const shoulders = document.getElementById("shoulders");
const bust = document.getElementById("bust");
const waist = document.getElementById("waist");
const hips = document.getElementById("hips");

const result = document.querySelector(".result");
const tips = document.querySelector(".tips");
const button = document.querySelector(".calculate");
const error = document.querySelector(".error");



button.addEventListener("click", function(e) {
    //Grab form info
    e.preventDefault();

    const inputs = form.elements;
    const shoulderValue = inputs["shoulders"].value;
    const waistValue = inputs["waist"].value;
    const hipValue = inputs["hips"].value;

   
   if (shoulderValue.length === 0 && waistValue.length === 0 && hipValue.length === 0) {
       error.innerText = "Please fill in all the fields"
       return;
   } else if (hipValue / shoulderValue >= 1.05) {
        result.innerText = "You have a Pear Body Shape.";
    } else if (shoulderValue / hipValue >- 1.05 && waistValue === shoulderValue) {
        result.innerText = "You have an Apple Body Shape";
    } else if (waistValue / shoulderValue <= 0.75 && waistValue / hipValue <= 0.75 && (hipValue * 0.95) < shoulderValue) {
        result.innerText = "You have an Hourglass Body Shape";
    } else if (shoulderValue / hipValue >= 1.05 && waistValue < shoulderValue) {
        result.innerText = "You have an Inverted Triangle Body Shape";
    } else if (waistValue / shoulderValue >= 0.75 && (shoulderValue * 0.95) < hipValue) {
        result.innerText = "You have a Rectangle Body Shape";
    } else {
        error.innerText = "Please fill in all fields";
    }
    
    //Clear the form
    clearForm(); 
   
});


const clearForm = function() {
    form.reset();
    error.innerText = "";
};
