function filterArrayValues(arr) {
    return arr.filter(Boolean);
}

console.log(filterArrayValues([58, '', 'abcd', true, null, false, 0])); 
// Output: [58, "abcd", true]
