const userEmail = [];

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// falsy values
// false,0,-0,bigint,0n,"",null,undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){}

// if(userEmail.length == 0){
//     console.log("array is empty");
// }


const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
 //val1 = 5 ?? 10 ans is 5
 // val1 = null ?? 10 ans is 10
 //val1 = undefined ?? 15 ans is 15

 // val1 = null ?? 10 ?? 20; ans is 10

 console.log(val1);

 // terniary operator

 // condition ? true: false

 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")