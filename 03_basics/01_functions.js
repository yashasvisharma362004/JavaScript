function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");

}

//sayMyName();

// function addTwoNumbers(number1,number2){ // parameters
//     console.log(number1 + number2);
// }

// //addTwoNumbers(2,5) // yha bolte h arguments

// const result = addTwoNumbers(3,8)
// console.log(result)

function addTwoNumbers(number1 , number2){
   
    const result = number1 + number2
    return result

}
const result = addTwoNumbers(5,3)
//console.log("Result:",result)

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Yashasvi Sharma"))

//console.log(loginUserMessage())
// agar value na de to undefined aata h

// next video start

function calculateCartPrice(...num1){ // this is my rest operator jitni value chahe utni de skta hu
    return num1
}
//console.log(calculateCartPrice(200,300,400))

// in this case hmara output 200 aayega first value utha li

// passing objects into functions

const user = {
    username: "Yashasvi",
    price: "199"
}

function handleObject(anyObject){//username nhi dalte
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user)

// aur we can directly pass the objects into the functions
 handleObject({
    username: "sam",
    price: 399
 })

 // Passing arrays into functions
 const myNewArray = [200,400,100,800]

 function returnSecondValue(getArray){
    return getArray[1]
 }
 console.log(returnSecondValue(myNewArray));


