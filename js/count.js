//console.log('This is count.js File');

/*
document.getElementById('btn-case-plus').addEventListener('click', function () {
    //console.log('Plus Button Clicked');

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;

    caseNumberField.value = newCaseNumber;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    //console.log('Minus Button Clicked');

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseMinusNumber = previousCaseNumber - 1;

    caseNumberField.value = newCaseMinusNumber;
})
*/

// Solution using function:

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    const caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total');

    caseTotalElement.innerText = caseTotalPrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})