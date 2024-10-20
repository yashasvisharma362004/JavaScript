//console.log('yashu');
// promises are async iske syntax ke ander ek fun hota hai

// const promiseOne = new Promise(function(resolve,reject){
//     // do any async task
//     // DB calls, cryptography,network

//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();
//         //reject(); ke liye valid reson chaiye
//     },1000);
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

// // phele hamesha async task is completed hi print hoga

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000);
// }).then(function(){
//     console.log('async 2 is resolved');
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // ab hum resolve ke ander kuch likhenge
//         resolve({username: "Chai",email: "chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// })

// // ye jo value return karta h vo ek aur .then ke ander chli jati h aur wha se hum print karte hai

// promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         // yani error 100% hai
//         if(!error){
//             resolve({username: "Yashu",password: "1234"})
//         }
//         else{
//             reject('Error: Something went wrong');
//         }
//     },1000)
// })
// //upar fun se kar k dekh liya es baar arrow fun se karte hai
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.password;
// }).then((password)=>{
//     console.log(password);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected");
// })

// promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Javascript",password: "123"});
//         }
//         else{
//             reject('Error: JS went wrong');
//         }
//     },1000)
// });

// isme then catch ka use nhi karenge try or catch ka use karenge

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consumePromiseFive();

// async function getAllusers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json(); // response ko json ke ander convert karegi
//         console.log(data);
//     }
//     catch(error){
//         console.log('E:' , error);
//     }
// }
// getAllusers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error) => console.log(error))
// //promise.all


const one  = document.getElementById("name");

fetch('https://swapi.dev/api/people/1').then((response)=>{
    return response.json();
    })
    .then((data)=>{
        console.log(data);
        return data;
        one.innerHTML = data.name;

        
    })
    .then((data)=>{
        console.log(data.name);
    })
    //.catch((error)=> console.log(error));