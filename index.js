// Code your solution here
function findMatching(array, string) {
    return array.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()   
    })
}

function fuzzyMatch(array, string) {
    return array.filter(maybe => maybe.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(array, string){
    return array.filter(driver => driver.name === string)
}
