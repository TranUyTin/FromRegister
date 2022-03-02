form = document.querySelector("form");
form_control = document.querySelector(".form_control");
userName = document.querySelector("#username");
email = document.querySelector("#email");
password = document.querySelector("#password");
cfPassword = document.querySelector("#cf_password");

function showError(intput, message) {
    input.parentElement.classList.add("error");

}