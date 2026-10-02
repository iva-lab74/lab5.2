const form = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");


//user
function validateUsername() {
  const value = usernameInput.value.required();
  if (value === "") {
    usernameError.textContent = "Username is required.";
    return false;
  }
  if (value.length < 4) {
    usernameError.textContent = "Username must be at least 4 characters.";
    return false;
  }
  usernameError.textContent = "";
  return true;
}

//email
function checkEmail() {
  if (email.value === "") {
    emailError.textContent = "Email is required.";
    return false;
  }
  emailError.textContent = "";
  return true;
}

//password
function checkPassword() {
  const text = password.value;


  
//local storage 