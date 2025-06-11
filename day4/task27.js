function retrieveValidValues(arr) {
    return arr.filter(value => typeof value === 'number' && value !== 0 && !isNaN(value));
}

console.log(retrieveValidValues([NaN, 0, 15, false, -22, '', undefined, 47, null]));
