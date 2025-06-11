function binary_Search(arr, target) {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return -1; 
}

var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1)); 
console.log(binary_Search(items, 5)); 
