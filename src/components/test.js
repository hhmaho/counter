console.log("ok")
const names = ["An", "Steve", "Sarah", "Jan"]
console.log(names)
console.log(names[0])
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
console.log((names[getRandomInt(names.length)]));
var current = getRandomInt(4)
console.log(current)
// for (var i = 0; i < 100; i++){
//     console.log((names[getRandomInt(names.length)]));
// }
for (var i = 0; i < 100; i++){
  result[current] = result[current]+1
}
