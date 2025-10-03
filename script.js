const textarea = document.querySelector(".show-data")

let account_balance_account = document.querySelector(".current-account-input").value
let cash_balance_account = document.querySelector(".current-cash-input").value
let count = 1
let int_account_balance = Number(account_balance_account)
let int_cash_balance = Number(cash_balance_account)

let new_data = `${count}, Current balance: ${account_balance_account}, Current cash balance: ${cash_balance_account}`
textarea.value += (textarea.value ? "\n" : "") + new_data
count ++;

function handleChange(){
    account_balance_account = document.querySelector(".current-account-input").value
    cash_balance_account = document.querySelector(".current-cash-input").value
    new_data = `${count}, Current balance: ${account_balance_account}, Current cash balance: ${cash_balance_account}`
    textarea.value += (textarea.value ? "\n" : "") + new_data
    int_account_balance = Number(account_balance_account)
    int_cash_balance = Number(cash_balance_account)
    count ++;
}

function handleOperate(){
    let command = document.querySelector(".command-select").value
    let amount = document.querySelector(".amount-command").value
    let amount_convert = Number(amount)
    if (command == "deposit"){
        if (amount_convert <= int_cash_balance){
            int_account_balance += amount_convert
            int_cash_balance -= amount_convert
            new_data = `${count}, Current balance: ${(int_account_balance).toString()}, Current cash balance: ${(int_cash_balance).toString()}`
            textarea.value += (textarea.value ? "\n" : "") + new_data
            count ++
        }else{
            new_data = `${count}, Couldn't deposit entered balance. (Insufficient cash balance)`
            textarea.value += (textarea.value ? "\n" : "") + new_data
            count ++
        }
    }else{
        if (amount_convert <= int_account_balance){
            int_cash_balance += amount_convert
            int_account_balance -= amount_convert
            new_data = `${count}, Current balance: ${(int_account_balance).toString()}, Current cash balance: ${(int_cash_balance).toString()}`
            textarea.value += (textarea.value ? "\n" : "") + new_data
            count ++
        }else{
            new_data = `${count}, Couldn't withdraw entered balance. (Insufficient account balance)`
            textarea.value += (textarea.value ? "\n" : "") + new_data
            count ++
        }
    }
}

