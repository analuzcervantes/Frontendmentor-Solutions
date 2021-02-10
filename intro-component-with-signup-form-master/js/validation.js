

const form = document.getElementById('form');

const fnInput = document.getElementById('FirstName');
const lnInput = document.getElementById('LastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('Password');


var nameFormat = '^[a-zA-Z\s, ]+$';
var passFormat = /^[A-Za-z]\w{7,14}$/;

function Error(inputs, message) {
    const form = inputs.parentElement;
    const label = form.querySelector('label');
    label.innerText = message;
    inputs.className = 'error';
    label.className = 'label-validation';
}

function Successful(inputs){
    const form = inputs.parentElement;
    const label = form.querySelector('label');
    inputs.className = 'success';
    label.className = 'label-success';
}

form.addEventListener('submit', e => {

    e.preventDefault();

    FirstName();
    LastName();
    email();
    password();
});

fnInput.addEventListener('blur', function () {

    FirstName();
});

lnInput.addEventListener('blur', function () {

    LastName();
});

emailInput.addEventListener('blur', function () {

    email();
});

passwordInput.addEventListener('blur', function () {

    password();
});

function FirstName() {
    var fn = fnInput.value;
    if(!fn) {
        Error(fnInput, 'First Name cannot be empty');
    }
    else {
        if(fn.match(nameFormat)){
            Successful(fnInput);
        }
        else {
            Error(fnInput, 'Looks like this is not an name');
        }
    }
    return fn;
}

function LastName() {
    var ln = lnInput.value;
    if(!ln) {
        Error(lnInput, 'Last Name cannot be empty');
    }
    else {
        if(ln.match(nameFormat)){
            Successful(lnInput);
        }
        else {
            Error(lnInput, 'Looks like this is not an name');
        }
    }
}

function email() {
    var mail = emailInput.value;
    if(!mail) {
        Error(emailInput, 'Email Address cannot be empty');
    }
    else {
        if(!validateEmail(mail)){
            Error(emailInput, 'Looks like this is not an email');
        }
        else {
            Successful(emailInput);
        }
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function password () {
    var pass = passwordInput.value;
    if(!pass) {
        Error(passwordInput, 'Password cannot be empty');
    }
    else {
        if(pass.match(passFormat)){
            Successful(passwordInput);
        }
        else {
            Error(passwordInput, 'It seems that it is not safe, try again.');
        }
    }
}
