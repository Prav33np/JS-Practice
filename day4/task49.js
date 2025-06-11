const thirdSmallest = (arr) => {
    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);
    return sortedUnique[2]; // Third smallest element (index 2)
};

const displayResult = (arr) => {
    console.log(`Original array of numbers: ${arr.join(",")}`);
    console.log(`Third smallest number of the said array of numbers: ${thirdSmallest(arr)}`);
};

displayResult([2, 3, 5, 7, 1]);  
// Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3

displayResult([2, 3, 0, 5, 7, 8, -2, -4]);  
// Output:
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0
