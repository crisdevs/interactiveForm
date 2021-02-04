const jobDropDown = document.querySelector("#title");
const otherJobText = document.querySelector("#other-job-role");
const tShirtColor = document.querySelector("#color");
const tShirtDesign = document.querySelector("#design");
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
tShirtDesign.addEventListener("change", (e) =>{


});


//calls the start up function
startUp();
