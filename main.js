const form = document.querySelector("form");
const emailField = document.querySelector(".email-field");
const emailInput = document.querySelector(".email");
const passField = document.querySelector(".create-password");
const passInput = document.querySelector(".password");
const conpassField = document.querySelector(".confirm-password");
const conpassInput = document.querySelector(".cpassword");     

//email
function checkEmail(){
const emailPattarn = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailInput.value.match(emailPattarn)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

//password
function  createpass(){
    if(passInput.value.length <= 6 ){
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}
function  confirmpass(){
        if(conpassInput.value !== passInput.value || conpassInput.value === "" ){
            return conpassField.classList.add("invalid");
        }
        conpassField.classList.remove("invalid");
    }
const eyeIcon = form.querySelectorAll(".show-hide");
eyeIcon.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input");
        if(pInput.type === "password"){
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
            return (pInput.type = "password");
    });
});

//function
form.addEventListener('submit', e =>  {
    e.preventDefault();
    checkEmail();
    createpass();
    confirmpass();
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createpass);
    conpassInput.addEventListener("keyup", confirmpass);
    if(
        !emailField.classList.contains("invalid")&&
        !passField.classList.contains("invalid")&&
        !conpassField.classList.contains("invalid")
    ){
        location.href = form.getAttribute("action");
    }
});


