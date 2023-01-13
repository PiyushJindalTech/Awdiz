const btnLogin = document.getElementById('btnLogin');
const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');



function onLogin() {
    const emailId = txtEmail.value;
    const password = txtPassword.value;

    if (emailId.trim() === "" || password.trim() === "") {
        alert("Invalid Email Id or Password");
        return;
    }
    alert('logged In!');
}

function onEditEmail(event) {
    if (isNaN(parseInt(event.key)) === true) {
        txtEmail.style.borderColor = 'red';
    }
    else {
        txtEmail.style.borderColor = 'black';
    }
    console.log(event.key);
    if (parseInt(event.key))
        console.log("onEditEmail");
}

btnLogin.addEventListener("click", onLogin);
txtEmail.addEventListener("keyup", onEditEmail);


console.log(btnLogin);
