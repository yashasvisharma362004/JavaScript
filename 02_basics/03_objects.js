// singleton-> jab hum constructor ke through object bnate hain
Object.create

// object literals

//Symbol
const mysym = Symbol("key1")

const JsUser = {
    name: "Hitesh", // name bhi by default string hai
    "full naam": "Yashasvi Sharma",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "yashu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]


}

console.log(JsUser.email)
console.log(JsUser["email"])

//agar upar likha hota name ki jagah full name to hm use . se fetch nhi kar pate 
//console.log(JsUser.full name);
console.log(JsUser["full name"]);

console.log(JsUser[mysym])

//values ko change kar skte h
JsUser.email = "yashasvisharma@gmail.com"
console.log(JsUser.email)

// agar hum chahte h isme kuch bhi change na ho
//Object.freeze(JsUser)
JsUser.email = "dfghjk@gmail.com"
console.log(JsUser)
//erroe nhi aayega but change nhi hoga

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())



