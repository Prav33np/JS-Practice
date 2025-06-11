function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

console.log(removeFalsyValues([NaN, 0, 15, false, -22, '', undefined, 47, null])); 

