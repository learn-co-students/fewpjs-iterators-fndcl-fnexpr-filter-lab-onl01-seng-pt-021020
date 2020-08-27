// Code your solution here
function findMatching(driverArray, query) {
    let search = driverArray.filter(e => {
        return e.toLowerCase() === query.toLowerCase()
    })
    return search
}

function fuzzyMatch(driverArray, query) {
    let search = driverArray.filter(e => {
        return e.toLowerCase().indexOf(query.toLowerCase()) === 0
    })
    return search
}

function matchName(driverArray, query) {
    let search = driverArray.filter(e => {
        return e.name.toLowerCase() === query.toLowerCase()
    })
    return search
}