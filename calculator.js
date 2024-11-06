function getInputs() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    return { num1, num2 };
}

function displayResult(result) {
    document.getElementById('result').textContent = result; // Replace old result with new
}

function add() {
    const { num1, num2 } = getInputs();
    const result = num1 + num2;
    displayResult(result);
}

function subtract() {
    const { num1, num2 } = getInputs();
    const result = num1 - num2;
    displayResult(result);
}

function multiply() {
    const { num1, num2 } = getInputs();
    const result = num1 * num2;
    displayResult(result);
}

function divide() {
    const { num1, num2 } = getInputs();
    if (num2 !== 0) {
        const result = num1 / num2;
        displayResult(result);
    } else {
        displayResult('Error: Division by zero');
    }
}
