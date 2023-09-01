const email = document.getElementById("email");
const form = document.getElementById("form");
const error = document.getElementById("error");
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = () => {
  if (emailPattern.test(email.value)) {
    resetEmailStyles();
  } else {
    showError("Valid email required");
  }
};

const resetEmailStyles = () => {
  email.style.border = "1px solid #ccc";
  email.style.backgroundColor = "white";
  error.textContent = "";
};

const showError = (errorMessage) => {
  email.style.border = "1px solid red";
  email.style.backgroundColor = "#FFE8E6";
  error.textContent = errorMessage;
};

const submitForm = () => {
  validateEmail();
  if (!error.textContent) {
    window.location.href =
      "success.html?email=" + encodeURIComponent(email.value);
  }
  return false;
};

email.addEventListener("input", validateEmail);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitForm();
});
