// const users = JSON.parse(localStorage.getItem(users)) || {}
var convert = document.getElementById("converttologin");
var authTitle = document.getElementById("authTitle");
var authToggle = document.getElementById("authToggle");
var submitButton;
const users = [];
var username = "";
var password = "";
function getValue() {
  username = document.getElementById("authUsername").value;
  password = document.getElementById("authPassword").value;
  // console.log(users)
  console.log("username", username, "password", password);

  return { username, password };
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const value = getValue();
    setUsers(value.username, value.password);

    console.log("Enter key was pressed!");
    console.log(getValue(), "return hogya");
  }
});

function setUsers(username, password) {
  users.push({
    username: username,
    password: password,
  });
  localStorage.setItem("users", JSON.stringify(users));
  console.log("get me chlrha", users);
}

function toSignUp() {
  const value = getValue();
  setUsers(value.username, value.password);
  console.log("toSignUp function clicked");
}

function ifLogin() {
  submitButton = document.getElementById("signUpSubmit");
  console.log("ifSignUp clicked", authTitle, authToggle);
  console.log(submitButton);
  authTitle.innerHTML = "Login";
  submitButton.innerHTML = "Login";
  authToggle.innerHTML = "Don't Have An Account? signUp";
  submitButton.setAttribute("id", "loginSubmit");
  submitButton.setAttribute("onclick", "toLogin()");
  authToggle.setAttribute("onclick", "ifSignUp()");
}

function toLogin() {
  console.log("toLogin clicked");
}

function ifSignUp() {
  console.log("ifSignUp clicked", authTitle, authToggle);
  submitButton = document.getElementById("loginSubmit");
  console.log(submitButton);
  authTitle.innerHTML = "signUp";
  submitButton.innerHTML = "signUp";
  authToggle.innerHTML = "Already have an account? Login";
  submitButton.setAttribute("id", "signUpSubmit");
  submitButton.setAttribute("onclick", "toSignUp()");
  authToggle.setAttribute("onclick", "ifLogin()");
}


 