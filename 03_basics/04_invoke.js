// Immediately Invoke Function
(function chai(){
    // named IIFE
    console.log("Db connected")

})();
//chai();

(function sum(){
    console.log(10)

})();

// agar neche wale fun ko execute karna h to phele wala fun ; se end hona chaiye
((name) =>{
    //unnamed IIFE
    console.log(`Db connected two ${name}`);
})(`Yashasvi`)