// Query Selectors
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const jobDropDown = document.querySelector("#title");
const otherJobText = document.querySelector("#other-job-role");
const tShirtColor = document.querySelector("#color");
const tShirtDesign = document.querySelector("#design");
const tShirtColorOpt = tShirtColor.querySelectorAll("option");
const fieldActivities = document.querySelector("#activities");
const activityCheckBox = fieldActivities.querySelectorAll(
  "input[type='checkbox']"
);
const activitiesTotalHTML = document.querySelector("#activities-cost");
const selectPayment = document.querySelector("#payment");
const payPal = document.querySelector("#paypal");
const bitCoin = document.querySelector("#bitcoin");
const creditCard = document.querySelector("#credit-card");
const creditCardNum = document.querySelector("#cc-num");
const zipCodeNum = document.querySelector("#zip");
const cvvNum = document.querySelector("#cvv");
const form = fieldActivities.parentNode;
//Total variable for activities
let activitiesTotal = 0;

/**
 * Puts focus on the name input, hides elements, disables t-shirt color selection element, and sets the value of the payment option to credit card.
 */
const startUp = () => {
  //Puts focus on name input
  nameInput.focus();

  hideOrShow(otherJobText,"hide")
  hideOrShow(payPal,"hide");
  hideOrShow(bitCoin, "hide");

  //disables the drop down for the tshirt color
  tShirtColor.disabled = true;

  selectPayment.value = "credit-card";
};
/**
 * Hides or Shows the given elements based on the string given.
 *
 * @param {HTML} element - The element to be hidden or shown.
 * @param {string} command - A string to represent hide or show depending on the purpose.
 */
//Function to show or hide the given eleme
const hideOrShow = (element, command) =>{
  if(command === "hide"){
    element.style.display = "none";
  }
  else if(command === "show"){
    element.style.display = "block";
  }
  else{
    console.log("Invalid command");
  }
}

/**
 *Applies styling and will prevent the form from submiting depending on the outcome of the input value and the regex test.
 *
 * @param {regex} regexTest - The regex test to test the inputs.
 * @param {HTML} input - The input whose value will be tested against the passed regex.
 * @param {object} eventObj - The event target to be used to prevent the submition of the page
 */
const checkInput = (regexTest, input, eventObj) => {
  if (regexTest.test(input.value)) {
    input.parentNode.className += " valid";
    input.parentNode.classList.remove("not-valid");
    hideOrShow(input.nextElementSibling, "hide");
  } else {
    eventObj.preventDefault();
    input.parentNode.className += " not-valid";
    hideOrShow(input.nextElementSibling, "show");
  }
};

//Event listener for when the job drop down changes value
jobDropDown.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    hideOrShow(otherJobText, "show");
  } else {
    hideOrShow(otherJobText, "hide");
  }
});
//Event listener in case a value is changed in the tshirt design drop down.
tShirtDesign.addEventListener("change", (e) => {
  tShirtColor.disabled = false;
  //Every time the t shirt design drop down changes will erase the options
  tShirtColor.innerHTML = "";
  //For loop to loop through each of pulled t shirt color options stored in tShirtColorOpt(Array of HTML Options).
  for (let i = 0; i < tShirtColorOpt.length; i++) {
    //If the selected t shirt design value matches the t shirt color option 'data-theme' attribute.
    if (e.target.value === tShirtColorOpt[i].getAttribute("data-theme")) {
      tShirtColor.appendChild(tShirtColorOpt[i]);
    }
  }
});
//Event Listener that listens to any change in the fieldset element.
fieldActivities.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const activCost = e.target.getAttribute("data-cost");
    //If the selected activity is being checked
    if (e.target.checked === true) {
      //Converts the activity cost pulled from the 'data-cost' attribute from a string to a integer and adds to the total.
      activitiesTotal += parseInt(activCost);
    }
    //If it is not checked when clicked 
    else {
      //Converts the activity cost pulled from the 'data-cost' attribute from a string to a integer and subtracts to the total.
      activitiesTotal -= parseInt(activCost);
    }
    //Adds the total to the HTML to be shown.
    activitiesTotalHTML.textContent = `Total: $${activitiesTotal}`;
  }
});
//Event Listener that listens to any change in the drop down select element.
selectPayment.addEventListener("change", (e) => {
  //Grabs the 
  // const typeOfPayment = document.getElementById(e.target.value);

  hideOrShow(payPal,"hide");
  hideOrShow(bitCoin, "hide");
  hideOrShow(creditCard,"hide");

  hideOrShow(e.target.value, "show");
});

form.addEventListener("submit", (e) => {
  const nameTest = /^[a-z]+[a-z ]+$/i;
  const emailTest = /^[^@]+@[^@.]+\.com$/i;
  const cardNumTest = /^\d{13,16}$/;
  const zipCodeTest = /^\d{5}$/;
  const cvvTest = /^\d{3}$/;

  checkInput(nameTest, nameInput, e);
  checkInput(emailTest, emailInput, e);
  checkInput(cardNumTest, creditCardNum, e);
  checkInput(zipCodeTest, zipCodeNum, e);
  checkInput(cvvTest, cvvNum, e);

  if (activitiesTotalHTML.textContent !== "Total: $0") {
    fieldActivities.className += " valid";
    fieldActivities.classList.remove("not-valid");
    hideOrShow(fieldActivities.lastElementChild, "hide");
  } else {
    e.preventDefault();
    fieldActivities.className += " not-valid";
    hideOrShow(fieldActivities.lastElementChild, "show");
  }
});
for (let i = 0; i < activityCheckBox.length; i++) {
  activityCheckBox[i].addEventListener("focus", (e) => {
    e.target.parentNode.className = "focus";
  });
  activityCheckBox[i].addEventListener("blur", (e) => {
    e.target.parentNode.classList.remove("focus");
  });
}
//calls the start up function
startUp();
