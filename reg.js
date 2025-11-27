// function for testing input
function returnText() {
  let input = document.getElementById("userInput")?.value;
  alert(input);
}

// Array to store registration data
const regData = [];

//EVENT HANDLERS
//  event listener for form submission
document.getElementById("registerForm").addEventListener("submit", function (event) { //REceives the submit event
  event.preventDefault(); //STOPS FORM FROM SUBMITTING AND REFRESHING PAGE

  // get form values to collect user data to store in local storage
  const user = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    
  };
  //INPUT VALIDATION A CRITERIA
  const confirmpassword = document.getElementById("confirmpassword").value;
  // check if passwords match
   if (user.password !== confirmpassword) {
    alert(" Passwords do not match! Please re-enter them.");
      return;
    }

  //lab 4 - registration data storage
// Store user data
  regData.push(user);
  localStorage.setItem("regData", JSON.stringify(regData));
  
// Clear the form
document.getElementById("registerForm").reset();

// Alert user
alert("Registration successful! You can log in now.");

// Redirect to login page
window.location.href = "login.html";

  
});

 
