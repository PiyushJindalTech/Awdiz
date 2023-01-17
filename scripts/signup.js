const btnSignup = document.getElementById('btnSignup');
const txtFirstName = document.getElementById('txtFirstName');
const txtLastName = document.getElementById('txtLastName');
const txtEmailId = document.getElementById('txtEmailId');
const txtPassword = document.getElementById('txtPassword');
const txtConfirmPassword = document.getElementById('txtConfirmPassword');

const lblErrorFirstName = document.getElementById('lblErrorFirstName');

const users = [];

function onSignUp() {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    const emailId = txtEmailId.value;
    const password = txtPassword.value;
    const confirmPassword = txtConfirmPassword.value;

    let errorMessage = '';

    if (firstName.trim() === '') {
        errorMessage += 'first name should not empty\n\r';
    }

    if (lastName.trim() === '') {
        errorMessage += '\nlast name should not empty\n\r';
    }

    if (emailId.trim() === '') {
        errorMessage += '\nEmail-Id should not empty\n\r';
    }

    if (password.trim() === '') {
        errorMessage += '\nPassword should not empty\n\r';
    }

    if (confirmPassword.trim() !== password.trim()) {
        errorMessage += '\nPassword and Confirm Password should be Same\n\r';
    }

    if (errorMessage !== '') {
        alert(errorMessage);
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

function onChangeFirstName(event) {
    const enteredKey = event.key;
    console.log(event.key);

    let pattern = /[a-zA-Z]/g;
    if (enteredKey.match(pattern) === null) {
        lblErrorFirstName.style.display = 'inline';
    
        if (txtFirstName.value.length < 2) {
            txtFirstName.value = '';
        }
        txtFirstName.value = txtFirstName.value.match(pattern).join('')
    }
    else {
        lblErrorFirstName.style.display = 'none';
    }
}

txtFirstName.addEventListener('keyup', onChangeFirstName);
btnSignup.addEventListener('click', onSignUp);