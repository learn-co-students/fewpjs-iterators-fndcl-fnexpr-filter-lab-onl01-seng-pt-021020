// Code your solution here
function findMatching(arr, str){
  return arr.filter(s => {
    return s.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, str){
  return arr.filter(s => {
    return s.startsWith(str)
  })
}

function matchName(arr, str) {
  return arr.filter(obj => obj.name.match(str))
}
