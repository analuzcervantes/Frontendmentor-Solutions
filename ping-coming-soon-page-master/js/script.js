
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validate() {
   var email, message;

    email = document.getElementById("email").value;

    if (!validateEmail(email)) {
        message = "Please provide a valid email address";
        document.getElementById("error-text").innerHTML = message;
        document.getElementById("email").style.borderColor = "hsl(354, 100%, 66%)";
    }
    else{
        document.getElementById("subscribe").action = "./../thank-you.html"; 
    }
}

