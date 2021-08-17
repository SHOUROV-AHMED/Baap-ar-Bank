// function 

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
 function updateBalance (amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    //  const balanceTotalText = balanceTotal.innerText
    //  const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance()
    
    if (isAdd == true){
        balanceTotal.innerText = previousBalanceTotal +  amount
    }
    else{
        balanceTotal.innerText = previousBalanceTotal -  amount
    }
 }



document.getElementById('deposit-button').addEventListener('click', function(){
    /*
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
*/

 
    // console.log(depositAmount)

    //get current deposit

//    const depositTotal = document.getElementById('deposit-total');
//     const depositTotalText = depositTotal.innerText
//     const previousDepositTotal = parseFloat(depositTotalText);
//     depositTotal.innerText = depositAmount + previousDepositTotal;
//     console.log(depositTotalText);
const depositAmount = getInputValue('deposit-input')
if ( depositAmount > 0 ){
    updateTotal('deposit-total',depositAmount)
updateBalance(depositAmount , true)
}

    //total
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal +  depositAmount
    // //clear input field
    // depositInput.value = '';
    ;
    
    

})
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('clicked');
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value
    // // console.log(withdrawAmountText)
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);
  
    // withdraw current amount 

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText); 
    // console.log(previousWithdrawTotal)
    //  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    const withdrawAmount= getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount <currentBalance){
        updateTotal('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount , false);
         if( withdrawAmount < currentBalance ){
             console.log('you cant withdraw more than you have money on your account');
         }
    }
      
     //update balance
     
        // const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat (balanceTotalText);
        // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
       
        // //clear 
        // withdrawInput.value = '';
       
    })