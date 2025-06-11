const permute = (arr, result = [], current = []) => {
    if (arr.length === 0) return result.push([...current]);

    arr.forEach((_, i) => {
        permute([...arr.slice(0, i), ...arr.slice(i + 1)], result, [...current, arr[i]]);
    });

    return result;
};

console.log(permute([1, 33, 5]));
// Output: [[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]

console.log(permute([1, 3, 5, 7]));
// Output: All 24 permutations

console.log(permute([2, 4]));
// Output: [[2,4],[4,2]]
