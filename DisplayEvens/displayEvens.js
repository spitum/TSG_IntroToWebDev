function validateItems() {

    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var step = document.getElementById('step');
    var result = document.getElementById('results')
    var num1value = Number(num1.value)
    var num2value = Number(num2.value)
    var stepvalue = Number(step.value)
    var numlist = []

    // check for null values and alert
    if (num1value == '' || isNaN(num1value)) {
        alert('Num1 must be filed with a number.');
        num1.focus();
        return false;
    }
    if (num2value == '' || isNaN(num2value)) {
        alert('Num2 must be filed with a number.');
        num2.focus();
        return false;
    }

    //check for ending value being greater than starting value
    if (num2value <= num1value) {
        alert('The ending number cannot be less than the starting number')
    }

    // check for step less than 0
    if (stepvalue < 0 || stepvalue == '' || isNaN(stepvalue)) {
        alert('Step should be a positive number')
        step.focus()
        return false;
    }

    // add even numbers between starting value and ending value to array 
    for (num1value; num1value <= num2value; num1value += stepvalue) {
        if (num1value % 2 == 0) {
            numlist.push(num1value)
        }
    }

    //add values to html and toggle display
    document.getElementById('num1text').innerHTML = num1.value
    document.getElementById('num2text').innerHTML = num2.value
    document.getElementById('steptext').innerHTML = step.value
    document.getElementById('results').innerHTML = numlist.join('<br />')
    result.style.display = 'block';
    return false;
}