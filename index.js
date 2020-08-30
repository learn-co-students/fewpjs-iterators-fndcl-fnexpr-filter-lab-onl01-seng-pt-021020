// Code your solution here
function findMatching(array, name){
    const matchingDrivers = array.filter(n => {return n.toLowerCase() === name.toLowerCase()});
    return matchingDrivers;
}


function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
      return driverName.slice(0, lengthOfName) === partialName;
    });
  }

function matchName(list, name){
    const matchingNames = list.filter(n => {return n.name === name});
    return matchingNames;
}