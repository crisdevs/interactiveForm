const jobDropDown = document.querySelector("#title");
const otherJobText = document.querySelector("#other-job-role");
const tShirtColor = document.querySelector("#color");
const tShirtDesign = document.querySelector("#design");
const tShirtColorOpt = tShirtColor.querySelectorAll("option");
const fieldActivities = document.querySelector("#activities");
const activitiesTotalHTML = document.querySelector("#activities-cost");
let activitiesTotal = 0;

//Function for when the page loads
const startUp = () => {
  //Name input
  const nameInput = document.querySelector("#name");
  //Puts focus on name input
  nameInput.focus();
  //Removes the display of the other text field
  otherJobText.style.display = "none";
  //disables the drop down for the tshirt color
  tShirtColor.disabled = true;
};
//Event listener for when the job drop down changes value
jobDropDown.addEventListener("change", (e) => {
  //if the other job drop down selection is selected
  if (e.target.value === "other") {
    //The other job text field appears on the web page
    otherJobText.style.display = "block";
  } else {
    //else if another selection is selected then remove the other job text field in case it is visible on the web page
    otherJobText.style.display = "none";
  }
});
//Event listener in case a value is changed in the tshirt design drop down.
tShirtDesign.addEventListener("change", (e) => {
  tShirtColor.disabled = false;
  tShirtColor.innerHTML = "";
  for (let i = 0; i < tShirtColorOpt.length; i++) {
    if (
      e.target.value === "js puns" &&
      tShirtColorOpt[i].getAttribute("data-theme") === "js puns"
    ) {
      tShirtColor.appendChild(tShirtColorOpt[i]);
    } else if (
      e.target.value === "heart js" &&
      tShirtColorOpt[i].getAttribute("data-theme") === "heart js"
    ) {
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

//calls the start up function
startUp();
