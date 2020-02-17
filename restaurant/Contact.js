
function setupModeButtons() {
    var modeButton = document.getElementById('Contact')
    modeButton.classList.add('active')
}


function validateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.value != '' && inputText.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Please enter a valid email address!");
        inputText.focus();
        return false;
    }
}

function validatePhone(num) {
    var phoneRe = /^((([0-9]{3}))|([0-9]{3}))[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var digits = num.value.replace(/\D/g, "");
    console.log(digits)
    if(num.value != '' && num.value.match(digits)) {
        return true;
    }

    else {
        alert('Please enter a valid phone number!');
        num.focus();
        return false;
    }
}

function validateName(str) {

    if (str.value != '') {
        return true;
    }
    else {
        alert('Name must be filled out')
        str.focus()
        return false; 
    }

}


function validateForm() {
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var phone = document.getElementById('phone')

    // validate name,email and phone
    if(validateName(name) && validateEmail(email) && validatePhone(phone)){
        alert('Form submitted. We will respond back shortly.')
    } ;

    return false;
}


