// Code your solution here
let test = [
  {name: "cameron"},
  {name: "tyler"},
  {name: "tiff"},
  {name: "hurly"},
  {name: "rocket"},
  {name: "CAMERON"}
]

function findMatching(drivers, name){
return drivers.filter(match => {
     return match.toLowerCase() === name.toLowerCase()
  })
}


function fuzzyMatch(drivers, str){
  return drivers.filter(match => {
    return match.startsWith(str)
  })
}
fuzzyMatch(test, "tyler")

function matchName(drivers, str){
  return drivers.filter(obj => obj.name.match(str))
}