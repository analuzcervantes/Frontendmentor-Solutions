
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

const left = document.querySelector('.left');

form.addEventListener('submit', e => {

    e.preventDefault();

    email();
});

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
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
            Successful(mail);
        }
    }
}

function Error(inputs, message) {
    const form = inputs.parentElement;
    const label = form.querySelector('label');
    label.innerText = message;
    inputs.className = 'error';
    label.className = 'label-validation';
}

function Successful(mail){
    const data = document.getElementById("main");
    data.querySelector("h1").innerHTML = 'Thank you!';
    data.querySelector("p").innerHTML = 'Your '+ mail +' has been received';
    data.querySelector("p").style.paddingBottom = '30%';
    document.getElementById('form').style.display = 'none';

}