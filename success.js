const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const emailParam = urlParams.get("email");
const validEmail = document.getElementById("validEmail");
validEmail.textContent = emailParam;
