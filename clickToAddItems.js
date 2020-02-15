
//declare variables for use in the below functions
let Form = document.getElementById('myForm')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

function clearErrors() {

    for (let loopCounter = 0; loopCounter < Form.length; loopCounter++) {
        if (Form[loopCounter].parentElement.className.indexOf('has-') != -1) {
            Form[loopCounter].parentElement.className = 'form-group';
        }
    }
}


function resetForm() {
    // clear values
    // remove results display. 
    //reset Submit button
    clearErrors()
    num1.value = '';
    num2.value = '';
    document.getElementById('results').style.display = 'none';
    document.getElementById('submitButton').innerText = 'Submit'
    num1.focus();

}

function validateItems(){
    // clear values
    // validate numeric fields for blank values. Numeric input controlled by Input[type]
    clearErrors();
    if(num1.value == '' || isNaN(num1.value)) {
        alert('Num1 must be filed with a number.');
        Form.num1.parentElement.className = 'form-group has-error'
        num1.focus();
        return false;
    }
    if(num2.value == '' || isNaN(num2.value)) {
        alert('Num2 must be filed with a number.');
        Form.num2.parentElement.className = 'form-group has-error'
        num2.focus();
        return false;
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Recalculate";
    document.getElementById("addResult").innerText = Number(num1.value) +
                                                      Number(num2.value);
    document.getElementById("subtractResult").innerText = num1.value - num2.value;
    document.getElementById("multiplyResult").innerText = num1.value * num2.value;
    document.getElementById("divideResult").innerText = num1.value / num2.value;
    return false;
}