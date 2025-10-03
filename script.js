const textarea = document.querySelector(".show-data")
const account_balance_account = document.querySelector(".current-account-input").value
const cash_balance_account = document.querySelector(".current-cash-input").value

let count = 1
let int_account_balance = Number(account_balance_account)
let int_cash_balance = Number(cash_balance_account)

let new_data = `${count}, Current balance: ${}, Current cash balance: ${cash_balance_account}`

textarea.value += (textarea.value ? "\n" : "") + 

