// Code your solution here

function findMatching(source, name) {
    return source.filter( match => match.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(source, name) {
    return source.filter( match => match.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

function matchName(source, name) {
    return source.filter(match => match.name === name)
}