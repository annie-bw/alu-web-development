const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressinput = document.getElementById('  Address');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

forms.addEventListener('submit', (e) => {

    var email_pattern = /^[a-z]{1}+[^ ]\.+[^ ][a-z]{2,}+@[^ ][a-z][^]+\.com$/;
var password_pattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{12,}$/;
    if(nameInput.value === ''){
        e.preventDefault();
        name_error.innerHTML = "Name is required!!";
    }
    if (email.value === '' || !email.value.match(email_pattern)) {
        e.preventDefault();
        email_error.innerHTML = " Valid Email is required!!";
    }
    if(password.value === '' ){
        e.preventDefault();
        password_error.innerHTML = "Password is required!!";
    }
    else if(!password.value.match(password_pattern)){
        e.preventDefault();
        password_error.innerHTML = "Password must contain at least 8 characters, including uppercase, lowercase, number and special character!!";
    }
