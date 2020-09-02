// Code your solution here

function findMatching(arr, str) {
    return arr.filter(driver =>
        driver.toLowerCase() === str.toLowerCase()
    )
}

function fuzzyMatch(arr, str) {
    return arr.filter(possibleMatch =>
        possibleMatch.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
}

function matchName(arr, str) {
    return arr.filter(record => record.name === str)
}