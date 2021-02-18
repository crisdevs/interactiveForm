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

let activitiesTotal = 0;

//Function for when the page loads
const startUp = () => {
  //Puts focus on name input
  nameInput.focus();
  //Removes the display of the other text field
  hideOrShow(otherJobText,"hide")

  hideOrShow(payPal,"hide");
  hideOrShow(bitCoin, "hide");
  //disables the drop down for the tshirt color
  tShirtColor.disabled = true;

  selectPayment.value = "credit-card";
};

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
const checkInput = (regexTest, input, eventObj) => {
  if (regexTest.test(input.value)) {
    input.parentNode.className += " valid";
    input.parentNode.classList.remove("not-valid");
    input.nextElementSibling.style.display = "none";
  } else {
    eventObj.preventDefault();
    input.parentNode.className += " not-valid";
    input.nextElementSibling.style.display = "block";
  }
};

//Event listener for when the job drop down changes value
jobDropDown.addEventListener("change", (e) => {
  //if the other job drop down selection is selected
  if (e.target.value === "other") {
    //The other job text field appears on the web page
    otherJobText.style.display = "block";
  } else {
    //else if another selection is selected then remove the other job text field in case it is visible on the web page
    hideOrShow(otherJobText, "hide");
  }
});
//Event listener in case a value is changed in the tshirt design drop down.
tShirtDesign.addEventListener("change", (e) => {
  tShirtColor.disabled = false;
  tShirtColor.innerHTML = "";
  for (let i = 0; i < tShirtColorOpt.length; i++) {
    if (e.target.value === tShirtColorOpt[i].getAttribute("data-theme")) {
      tShirtColor.appendChild(tShirtColorOpt[i]);
    }
  }
});
//Event Listener for the activities checkboxes
fieldActivities.addEventListener("change", (e) => {
  if (e.target.type === "checkbox") {
    const activCost = e.target.getAttribute("data-cost");

    if (e.target.checked === true) {
      activitiesTotal += parseInt(activCost);
    } else {
      activitiesTotal -= parseInt(activCost);
    }
    activitiesTotalHTML.textContent = `Total: $${activitiesTotal}`;
  }
});

selectPayment.addEventListener("change", (e) => {
  const typeOfPayment = document.getElementById(e.target.value);

  hideOrShow(payPal,"hide");
  hideOrShow(bitCoin, "hide");
  hideOrShow(creditCard,"hide");

  hideOrShow(typeOfPayment, "show");
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
