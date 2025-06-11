function removeArrayElement(arr, value) {
    return arr.filter(item => item !== value);
}

console.log(removeArrayElement([2, 5, 9, 6], 5)); 
// Output: [2, 9, 6]
