const accountId = 14453
let accountEmail = "yashasvi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // without declaring var bhi hum memory assign kar skte h but it was not good practise

let accountState; // this is undefined

// gar hum const declare kar rhe h to hum usko change nhi kar skte

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21321212"
accountCity = "delhi"

console.log(accountId)

console.table([accountId , accountEmail , accountPassword , accountCity])
/*
hum use karenge const or let var ka use na karein
*/

console.log(accountState)