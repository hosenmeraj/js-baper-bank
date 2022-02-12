//use common function for input
function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputFeild.value = '';
    return amountValue;
}

//use common function current deposit and withdraw
function updateTotalFeild(totalFeildId, amount) {
    const totalElement = document.getElementById(totalFeildId);
    const totalText = totalElement.innerText;
    const peviousTotalText = parseFloat(totalText);
    totalElement.innerText = peviousTotalText + amount;
}
//check balance function
function getCurrenBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
//use common function upadate balance
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotalText = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrenBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}

document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalFeild('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    //get current deposite
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const peviousDepositTotalText = parseFloat(depositTotalText);
    // depositTotal.innerText = peviousDepositTotalText + depositAmount;
    //updateTotalFeild('deposit-total', depositAmount);
    // console.log(depositTotalText);
    // update balance after total balance
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    //updateBalance(depositAmount, true);

    //clear input field
    // depositInput.value = '';
})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    const currenBalance = getCurrenBalance();
    if (withdrawAmount > 0 && withdrawAmount < currenBalance) {
        updateTotalFeild('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currenBalance) {
        alert('you cant withdraw')
    }
    //get current withdraw
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalText = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotalText + withdrawAmount; */
    //updateTotalFeild('withdraw-total', withdrawAmount);

    //update balance after withdraw
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    //updateBalance(withdrawAmount, false);



})