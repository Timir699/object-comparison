const mahir = {
    name: 'mahir',
    designation: 'frontend dev',
    salary: 30000
}

const employe = {
    name: 'mahir',
    designation: 'frontend dev',
    salary: 30000
}

function compareObj(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const property in obj1) {
        if (obj1[property] !== obj2[property]) {
            return false
        }
    }
    return true
}

const isEqual = compareObj(mahir, employe)
console.log(isEqual);