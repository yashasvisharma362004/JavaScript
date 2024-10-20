// Arrow Functions
const user = {
    username: "Yashasvi",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username},welcome to website`) // this is used for accessing current context
        console.log(this)
    }

}
//  user.WelcomeMessage()
//  user.username = "Sam"
//  user.WelcomeMessage();

console.log(this) // yha p empty dega kyuki node environment hai

// Arrow function
const chai = () => {
    let 
}

