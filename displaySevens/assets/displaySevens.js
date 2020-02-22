$('.btn-group').on('click','button',function () {
    if (Number($('input').val()) == '' || Number($('input').val()) < 0) {
        alert('Please enter a starting bet greater than 0')
        return false
    }
    //set starting bet to input vale
    else {
        let startingBet = Number($('input').val());

        // trigger function 
        displaySevens(startingBet)

        // display results
        $('.results').css('display', 'block')

        //Ask user if they want to play again and remove previous input
        $(this).text('Play Again?')
        $('input').val('')
        $('input').focus()
    }
    return false
});

const displaySevens = (startingBet) => {
    //declare variables to use
    let sum = 0
    let NumRolls = 0
    const highest = { 'high': 0, 'Roll': 0 }

    while (startingBet > 0) {
        sum = rollDice() + rollDice()
        NumRolls++;
        if (sum === 7) {
            startingBet += 4;
        }

        if (startingBet >= highest['high']) {
            highest['high'] = startingBet;
            highest['Roll'] = NumRolls;
        }
        // console.log('startingbet: ' + startingbet + 'NumRolls: ' + NumRolls + 'Sum:' + sum + 'highest' + highest['high'])
        startingBet--;

    }

    //add values to table
    $('.start').text('$' + Number($('input').val()))
    $('.Rolls').text(NumRolls)
    $('.High').text('$' + highest['high'])
    $('.HighRoll').text(highest['Roll'])

}

//RollDice function
const rollDice = () =>
    Math.floor(Math.random() * 6) + 1;
