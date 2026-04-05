const validUser = {
  username: "kyy",
  password: "123"
};

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if (username === validUser.username && password === validUser.password) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});

const showPasswordCheckbox = document.querySelector('.remember input[type="checkbox"]');
const passwordField = document.getElementById("password");

showPasswordCheckbox?.addEventListener("change", function() {
  passwordField.type = this.checked ? "text" : "password";
});

function handleCredentialResponse(response) {
  console.log("Google ID Token:", response.credential);
  alert("Google Sign-In successful! Token received.");
}
