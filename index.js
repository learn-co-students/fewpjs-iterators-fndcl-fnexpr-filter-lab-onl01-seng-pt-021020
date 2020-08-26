
function findMatching(array, string) {
    let matching = [];
    return matching = array.filter(s => {return s.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(array, string) {
    let matching = [];
    return matching = array.filter(s => {
        for(let i = 0; i < string.length; i++) {
            return s[i] === string[i];
        }
    })
}

function matchName(array, string) {
    let matching = [];
    return matching = array.filter(obj => {
        return obj.name === string;
    })
}