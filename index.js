// Code your solution here
function findMatching(array, string) {
return array.filter(element => {
    if (element.toLowerCase() === string.toLowerCase()){
        return element
    }
})
}




function fuzzyMatch(driversArray, string) {
    return driversArray.filter(driver => {
      let stringCount = string.length
      if (driver.slice(0, stringCount) === string) {
        return driver;
      };
    });
  };
  
  
  function matchName(driversArray, string) {
    return driversArray.filter(driver => {
      if (driver.name === string) {
        return driver;
      };
    });
  };