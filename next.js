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
// const button = document.getElementById("authSubmit")
// console.log(button)
// function toSignUp(){
//     function toLogin(){
//         console.log("kam hogya")
//     }

// console.log(button.setAttribute(onclick,toLogin()))
//     convert.innerHTML +=`<div style="position: fixed; top:0; left:0; width:100%; height:100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index:9999;">
//     <div style="background:white; padding:20px; border-radius:10px; width:300px; text-align:center;">
//       <h3 id="authTitle">Login</h3>
//       <input id="authUsername" placeholder="Username" style="width:100%; padding:8px; margin-bottom:10px;" />
//       <input type="password" id="authPassword" placeholder="Password" style="width:100%; padding:8px;" />
//       <div style="margin:10px 0;">
//         <button id="authSubmit" style="padding:8px 16px;" onclick="">Login</button>
//       </div>
//       <p id="authToggle" style="color:blue; cursor:pointer">Don't have an account?SignUp</p>
//       <p id="authMsg" style="color:red;"></p>
//     </div>
//   </div>`

// }
