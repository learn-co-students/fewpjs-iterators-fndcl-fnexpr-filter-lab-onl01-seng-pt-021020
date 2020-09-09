function findMatching(arr, str) {
    return arr.filter(elem => elem.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str) {
    return arr.filter(elem => elem.startsWith(str))
}

function matchName(arr, str) {
    return arr.filter(elem => elem.name === str)
}
