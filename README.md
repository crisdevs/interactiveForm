# InteractiveForm

<h2>Summary</h2>
An interactive form that uses regex and Javascript to validate and avoid the page from submitting if forms are not filled out correctly.
 
<h2>Basic Info</h2>
<p>Name is required for the form to submit. Using regex it determines if the name input is blank. If it is blank than a message on the bottom will state that the Name field cannot be blank</p>
<p>Email Address is required for the form to submit. It also uses regex to determine if the email address is formatted correctly. It must have a combination of numbers and letters following the @ symbol then again numbers and letter ending with a .com.</p>
<p>Examples of acceptable email addresses</p>
<ul>
 <li>cris9512@coolawesome.com</li>
 <li>cristian@coolawesome.com</li>
 <li>cristian@coolawesome123.com</li>
 </ul>
 <p>Job role input is a drop down containing different job roles that a user may choose. If the user chooses "other" a text field will appear so the user can specify their job role</p>
 
 <h2>T-Shirt Info</h2>
 <p>Includes a drop down to choose a shirt size. Has a t-shirt design drop down and depending on what is chosen, it will fill the color drop down with certain colors.</p>
 <p>If "Theme - JS Puns" is chosen in the design drop down, then the available colors to choose will be:</p>
 <ul>
  <li>Cornflower Blue</li>
  <li>Dark Slate Grey</li>
  <li>Gold</li>
 </ul>
 <p>If "Theme - I <3 JS" is chosen in the design drop down, then the available colors to choose will be:</p>
 <ul>
  <li>Tomato</li>
  <li>Steel Blue</li>
  <li>Dim Grey</li>
 </ul>
 <h2>Register for Activities</h2>
 <p>In this section, the user can choose which activity they would like to sign up to by checking the checkbox next to the activity description. When a activity is chosen the total on the bottom of the section is updated depending on the amount of the activity chosen. If an activity is chosen, the form will disable any other activity that is scheduled on the same day and time.</p>
 
 <h2>Payment Info</h2>
 <p>This is the payment section where the user can enter how they are going to pay and enter their payment information if they are using a credit card.</p>
 <p>The first drop down asks the user how they are going to pay. Depending on whether they choose Credit Card, PayPal, or  Bitcoin the rest of the form will be different.</p>
 <p>If the Credit card option is chosen then the fields asking for credit card information is shown</p>
 <p>If the PayPal or Bitcoin option is chosen then information regarding the payment option will be shown and the credit card info will hide</p>
 <p>If <strong>Credit Card</strong> is chosen:</p>
 <p>Expiration Date and Expiration year is a drop down to choose the expiration date and year of the credit card.</p>
 <p>Card Number is required and must be 13 - 16 numbers. <strong>It is the only field that shows a real time error. So when you start typing in this field you will see while you are typing if the value in the field meets the requirements</strong>. Also is the only field with a unique error. When the field is blank the error will change to say "Credit card field can't be blank".</p>
 <p>Zip code is also a required field and will only allow the form to submit if it is 5 digits long.</p>
 <p>CVV is also a required field and will only allow the form to submit if it is 3 digits long</p>
 
 <h2>Submit</h2>
 <p>If all requirements are met then the form will submit.</p>
 
