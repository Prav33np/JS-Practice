function sumArraysByIndex(arr1, arr2) {
    let maxLength = Math.max(arr1.length, arr2.length);
    let result = Array.from({ length: maxLength }, (_, i) => (arr1[i] || 0) + (arr2[i] || 0));
    return result;
}

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];

console.log(sumArraysByIndex(array1, array2));