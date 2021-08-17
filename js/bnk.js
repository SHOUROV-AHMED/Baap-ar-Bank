

function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);
    //clear 
    inputField.value = '';
    return AmountValue;

}

function updateTotal (totalFieldId ,depositAmount){
    const totalValue = document.getElementById(totalFieldId);
    const totalText = totalValue.innerText;
    const previousTotal = parseFloat(totalText);
    totalValue.innerText = previousTotal + depositAmount

}

function getCurrentBalance (){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

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
    const depositAmount = getInputValue ('deposit-input');
    if(depositAmount > 0 ){
       updateTotal ('deposit-total', depositAmount);
       updateBalance (depositAmount , true) ;
    }
    
})

document.getElementById('withdraw-button').addEventListener('click', function(){

     const withdrawAmount = getInputValue('withdraw-input');
     const currentBalance = getCurrentBalance();

     if (withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotal('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount , false)
     }
     
})
