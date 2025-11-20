// function for testing input
function returnText() {
  let input = document.getElementById("userInput")?.value;
  alert(input);
}

// Array to store registration data
const regData = [];

//  event parameter
document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // correct variable name

  //  Use the  IDs from  HTML
  const user = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    dob: document.getElementById("dob").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    
  };

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

 
