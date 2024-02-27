var isEqualButtonPressed = false;
var inputDisplay = document.getElementById('inputDisplay');
var resultDisplay = document.getElementById('resultDisplay');

function appendToDisplay(value) {
    if (!isEqualButtonPressed) {
        switch (value) {
            case 'del':
                inputDisplay.value = inputDisplay.value.slice(0, -1);
                break;
            case '%':
                inputDisplay.value += '/100';
                break;
            case '+/-':
                inputDisplay.value += '*(-1)';
                break;
            default:
                inputDisplay.value += value;
        }
    }
}

function clearDisplay() {
    inputDisplay.value = '';
    resultDisplay.value = '';
    isEqualButtonPressed = false;
}

function deleteLastCharacter() {
    if (!isEqualButtonPressed) {
        inputDisplay.value = inputDisplay.value.slice(0, -1);
    }
}

function calculate() {
    var inputExpression = inputDisplay.value;
    try {
        var result = eval(inputExpression);
        resultDisplay.value = result;
        inputDisplay.value = inputExpression + ' = ';
        isEqualButtonPressed = true;
    } catch (error) {
        inputDisplay.value = 'Error';
        resultDisplay.value = '';
        isEqualButtonPressed = false;
    }
}

function calculatePercentage() {
    var displayValue = parseFloat(inputDisplay.value);
    inputDisplay.value = displayValue / 100;
}

function calculatePlusMinus() {
    var displayValue = inputDisplay.value;
    if (!isEqualButtonPressed) {
        inputDisplay.value = displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue;
    }
}
