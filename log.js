
// array to store Login data
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];


document.getElementById("loginForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  
  // Store login data
  const user = { username, password };
  //add to login array
    loginData.push(user);

    // save and Store login data in localStorage
    localStorage.setItem("loginData", JSON.stringify(loginData));

  // Retrieve registered users from localStorage
  const registeredUsers = JSON.parse(localStorage.getItem("regData")) || [];
    // Check if a matching user exists
  const foundUser = registeredUsers.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    alert(" Login successful! Welcome back, " + foundUser.firstname + "!");

    // Mark user as logged in
    localStorage.setItem("isLoggedIn", "true");
    
    window.location.href = "../index.html"; // Redirect to home page

  } else {
    alert(" Login has failed! Check your username and/or password.");
  }
});

 