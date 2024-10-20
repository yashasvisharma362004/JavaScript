// Array

const myArr = [0,1,2,3,4,5,true,"hitesh"]
// javascript ke array resizeable hote h
// arrays in javascript shallow copy bnata h 

console.log(myArr[0]);
console.log(myArr[1]);
const myHeroes = ["shaktiman","pikachu"]
console.log(myHeroes[1]);

const myArr2 = new Array(2,4,6,8,10);
//Array methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop() // only remove the last value
// console.log(myArr)
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr) // jo hmne 9 insert kiya tha usko hta dega

console.log(myArr.includes(10))
console.log(myArr.indexOf(9))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof(newArr)) // join ne iska type change kar diya h string bna di h

// slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log(myn1)

// slice does not includes the last value but splice do and splice  also change the whole array
//splice changes in original array but slice not



