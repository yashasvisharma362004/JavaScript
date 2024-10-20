//const tinderUser = new Object() // singelton object hai jo ki define hua h constructor ki help se
const tinderUser = {}
tinderUser.id = "123@gmail.com",
tinderUser.name = "Varun",
tinderUser.isLoggedIn = false
//console.log(tinderUser)

// object ke ander object ko smajte h
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yashasvi",
            lastname: "Sharma"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//dono ko combine karna hai

//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2,obj4) // best practise
//console.log(obj3)

// aur spread operator bhi use kar skte hai
// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// conaole.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}

//course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

// agar mujhe naam ko chotta karna hai
const {courseInstructor:Instructor} = course
console.log(Instructor)

// kuch baate json or apis ke baare mein ki

