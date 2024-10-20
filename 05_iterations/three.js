// for of
//["","",""]
//[{},{},{}]

//  const arr = [1,2,3,4,5]

//  for(const num of arr){
//      console.log(num);
// // }

// const greeting = "Hello world";
// for(const greet of greeting){
//     console.log(` Each char is ${greet}`);
// }

// maps

const map = new Map()
map.set('IN',"india")
map.set('USA',"united state of america")
map.set('Fr',"france");
map.set('IN',"india")
//console.log(map);

for(const key of map){
    console.log(key);
}

 for(const [key,value] of map){
console.log(key, ":-",value);
 }

 const myObject = {
     'game1' : 'NFS',
     'game2' : 'Spiderman'
 }
//  //objects are not iterable by for of loop
// for(const [key,value] of myObject){
//     console.log(key,":-",value);
// }
