const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault(); //Hold for a while before submitting
    checkUsername();
    checkPassword();
    checkConfirmPassword();
    checkPasswordMatch();
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkUsername(){
    if (username.value === ""){
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
}

function checkPassword() {
    if (password.value === "") {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }
}

function checkConfirmPassword() {
    if (password2.value === "") {
        showError(password2, "Please confirm the password");
    } else {
        showSuccess(password2);
    }
}

function checkPasswordMatch() {
    if (password.value !== password2.value) {
        showError(password2, "Passwords do not match");
    }
}

