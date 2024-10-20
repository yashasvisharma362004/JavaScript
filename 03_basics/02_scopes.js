//var c = 300 
let a = 300 //global scope

if(true){let a = 10 // local scope
const b = 20
var c = 30
}

//console.log(a);
//console.log(b);
//console.log(c);

// broweser mein jake scope check karte h vo alag hota h aur node ke through scope alag hota h

function One(){
    const username = "hitesh"

    function Two(){
        const website = "youtube"
        console.log(username); // ander ka fun bahar ke fun ko access kar pate hai
    }
    //console.log(website); // iska scope to ander tak hi h yha access nhi kar skte error dega
    Two()
}
One()

if(true){
    const username = "Yashasvi"
    if(username === "Yashasvi"){
        const website = " youtube"
        console.log(username + website);
    }

    //console.log(website) // error dega
}

// console.log(username) ye bhi error dega

// +++++++++++++++++++  intresting  ++++++++++++++++

console.log(addOne(5)) // iske ander koi error nhi aayega phele print karne par bhi
function addOne(num){
    return num + 1;
}


console.log(addTwo(5)) // but iske ander hmara error aa jayega this is the concept of hoisting
const addTwo = function(num){
    return num +2;
}