const form = document.querySelector(".form");
const shoulders = document.getElementById("shoulders");
const waist = document.getElementById("waist");
const hips = document.getElementById("hips");

const result = document.querySelector(".result");
const tips = document.querySelector(".tips");
const button = document.querySelector(".calculate");
const error = document.querySelector(".error");
const buttonStartOver = document.querySelector(".start-over");

const pear = document.querySelector(".pear");
const apple = document.querySelector(".apple");
const hourglass = document.querySelector(".hourglass");
const inverted = document.querySelector(".inverted");
const rectangle = document.querySelector(".rectangle");



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
        result.innerText = "You have a Pear Body Shape!";
        pear.classList.remove("hide");
        pear.classList.add("show");
    } else if (shoulderValue / hipValue >= 1.05 && waistValue === shoulderValue) {
        result.innerText = "You have an Apple Body Shape!";
        apple.classList.remove("hide");
        apple.classList.add("show");
    } else if (waistValue / shoulderValue <= 0.75 && waistValue / hipValue <= 0.75 && (hipValue * 0.95) < shoulderValue) {
        result.innerText = "You have an Hourglass Body Shape!";
        hourglass.classList.remove("hide");
        hourglass.classList.add("show");
    } else if (shoulderValue / hipValue >= 1.05 && waistValue < shoulderValue) {
        result.innerText = "You have an Inverted Triangle Body Shape!";
        inverted.classList.remove("hide");
        inverted.classList.add("show");
    } else if (waistValue / shoulderValue >= 0.75 && (shoulderValue * 0.95) < hipValue) {
        result.innerText = "You have a Rectangle Body Shape!";
        rectangle.classList.remove("hide");
        rectangle.classList.add("show");
    } else {
        error.innerText = "Please fill in all fields";
    }
    
    //Clear the form
    clearForm(); 

    //Show the start over button
    startOver();
   
});

//Clear the form function
const clearForm = function() {
    form.reset();
    error.innerText = "";
   
};

//Show the start over button function
function startOver() {
    button.classList.add("hide");
    buttonStartOver.classList.remove("hide");
    buttonStartOver.classList.add("show");
}

//When click the start over button the start over button disappears and the calculate button reappears
buttonStartOver.addEventListener("click", function(){
    button.classList.remove("hide");
    buttonStartOver.classList.remove("show");
    buttonStartOver.classList.add("hide");
    tips.classList.remove("show");
    tips.classList.add("hide");
    
})

