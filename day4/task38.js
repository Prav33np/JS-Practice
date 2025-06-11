function move(arr, fromIndex, toIndex) {
    const element = arr.splice(fromIndex, 1)[0]; // Remove the element
    arr.splice(toIndex, 0, element); // Insert it at the new position
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2)); 
// Output: [20, 30, 10, 40, 50]

console.log(move([10, 20, 30, 40, 50], -1, -2)); 
// Output: [10, 20, 30, 50, 40]
