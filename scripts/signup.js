const btnSignup = document.getElementById('btnSignup');
const txtFirstName = document.getElementById('txtFirstName');
const txtLastName = document.getElementById('txtLastName');
const txtEmailId = document.getElementById('txtEmailId');
const txtPassword = document.getElementById('txtPassword');
const txtConfirmPassword = document.getElementById('txtConfirmPassword');

const lblInvalidPassword = document.getElementById('lblInvalidPassword');

const users = [];

function onSignUp() {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    const emailId = txtEmailId.value;
    const password = txtPassword.value;
    const confirmPassword = txtConfirmPassword.value;

    if (password !== confirmPassword) {
        alert('password and confirm-password doesn\'t match');
        return;
    }

    const user = {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password
    }
    users.push(user);
    console.log(users);
}

function onConfirmChange(event) {
    const password = txtPassword.value;
    const confirmPassword = txtConfirmPassword.value;

    if (password.slice(0, confirmPassword.length) !== confirmPassword) {
        lblInvalidPassword.style.display = 'inline';
    }
    else {
        lblInvalidPassword.style.display = 'none';
    }
    return true;
}

btnSignup.addEventListener('click', onSignUp);
txtConfirmPassword.addEventListener('keyup', onConfirmChange);