function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(getRandomItem([10, 20, 30, 40, 50])); 
// Output: (randomly chosen number from the array)
