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
function checkUsername() {
  const value = usernameInput.value.trim();
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

  if (text === "") {
    passwordError.textContent = "Password is required.";
    return false;
  }
  passwordError.textContent = "";
  return true;
}

//check password
function checkConfirmPassword() {
  if (confirmPassword.value === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    return false;
  }
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  }
  confirmPasswordError.textContent = "";
  return true;
}

//showing errors while typing 
username.addEventListener("input", checkUsername);
email.addEventListener("input", checkEmail);
password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkConfirmPassword);

//clicking register
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameOk = checkUsername();
  const emailOk = checkEmail();
  const passwordOk = checkPassword();
  const confirmOk = checkConfirmPassword();

  if (usernameOk && emailOk && passwordOk && confirmOk) {
    localStorage.setItem("username", username.value.trim());
    successMessage.textContent = "Registration successful!";
  } else {
    successMessage.textContent = "";
  }

});

//local storage 
// const savedName = localStorage.getItem("username");
// if (savedName) {
//   username.value = savedName;
// }