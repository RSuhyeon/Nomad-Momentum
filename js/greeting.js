const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#afterLogin");
const body = document.querySelector("body");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const AFTER_LOGIN = "afterLogin";

function onLoginSubmit(event){
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    const greetings = ["Trust yourself", "Hello", "Do not underestimate yourself", "Be the best version of yourself", "Be powerful", "Never stop", "Think postiively"];
    const chosenGreetings = greetings[Math.floor(Math.random() * greetings.length)];
    greeting.innerText = `${chosenGreetings}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    body.classList.add(AFTER_LOGIN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings();
}