function mostFrequent(arr) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length - arr.filter(v => v === b).length
    ).pop() + ` (${arr.filter(v => v === arr[arr.length - 1]).length} times)`;
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1)); 
