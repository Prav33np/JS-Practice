function findDuplicates(arr) {
    let seen = new Set();
    let duplicates = [];
    arr.forEach(item => {
        if (seen.has(item)) duplicates.push(item);
        else seen.add(item);
    });
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6])); 
