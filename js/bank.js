


function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';

    return AmountValue;
}
function updateTotal(totalFieldId ,depositAmount){
    const tkTotal = document.getElementById(totalFieldId);
    const TotalText = tkTotal.innerText
    const previousTotal = parseFloat(TotalText);
    tkTotal.innerText = depositAmount + previousTotal;
}
function getCurrentBalance (){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal
   
}
function updateBalance(amount , isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal +  amount
    }
    else{
        balanceTotal.innerText = previousBalanceTotal -  amount
    }
 }
document.getElementById('deposit-button').addEventListener('click', function(){

    const depositAmount = getInputValue('deposit-input')
    if ( depositAmount > 0 ){
        updateTotal('deposit-total',depositAmount)
    updateBalance(depositAmount , true)
    }
})

document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawAmount= getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount <currentBalance){
        updateTotal('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount , false);
         if( withdrawAmount < currentBalance ){
             console.log('you cant withdraw more than you have money on your account');
         }
    }


})
