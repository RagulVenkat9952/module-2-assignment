const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
});

form.addEventListener("submit", function (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }
  form.classList.add("was-validated");
});
