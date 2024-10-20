const marvelHeroes = ["thor","ironman","spiderman"]
const dcHeroes = ["superman","flash","batman"]

//marvelHeroes.push(dcHeroes)
 const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes)

// kai baar hum spread use karte hai
const all_new_heroes = [...marvelHeroes, ...dcHeroes]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(11)
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))
