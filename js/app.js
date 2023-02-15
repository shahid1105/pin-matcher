function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // display pin
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const character = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedCharacter = typedNumberField.value;
    if (isNaN(character)) {
        if (character === 'C') {
            typedNumberField.value = '';
        }
        else if(character === '<'){
            const digits = previousTypedCharacter.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedCharacter = previousTypedCharacter + character;
        typedNumberField.value = newTypedCharacter;
    }
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const displayFieldPin = document.getElementById('display-pin');
    const currentPin = displayFieldPin.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typeNumber = typedNumberField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinUnSuccess = document.getElementById('pin-unsuccess');
    
    if(typeNumber === currentPin){
        pinSuccess.style.display = 'block';
        pinUnSuccess.style.display = 'none';
    }
    else{
        pinUnSuccess.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})