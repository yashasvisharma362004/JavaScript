const myObject = {
    js : "javascript",
    cpp : "cplusplus",
    rb : "ruby",
    swift : "swift by apple"
}
//this is my for in loop
for(const key in myObject){
    //console.log(myObject[key]);
   // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// for in loop on arrays

const prog = ["cpp","js","py","java","rb"]
for(const key in prog){
    //console.log(prog[key]);
}


const map = new Map()
map.set("IN","india")
map.set("usa","united state of america")
map.set("fr","france")
map.set("SA","south africa");

for(const key in map){
    console.log(key)
}

// some imp points
//-> for of loop objects pe nhi lgta hai
//->for objects we use for in loop
//->for in loop array ke case mein sirf key print kar rha hai jabki for of ke case mein aisa nhi tha
//->Map is not iterable isliye for in loop ka use karke isko print nhi karva skte
//-> map print karvane ke liye hum for of loop ka use karte hai