const findNaNIndexes = (arr) => arr.map((val, i) => Number.isNaN(val) ? i : -1).filter(i => i !== -1);

const displayResult = (arr) => {
    console.log(`Original array: ${arr.join(",")}`);
    console.log(`Find all indexes of NaN of the said array: ${findNaNIndexes(arr).join(",")}`);
};

displayResult([2, NaN, 8, 16, 32]);  
// Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1

displayResult([2, 4, NaN, 16, 32, NaN]);  
// Output:
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5

displayResult([2, 4, 16, 32]);  
// Output:
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:
