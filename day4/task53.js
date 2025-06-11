const countArrays = (arr) => arr.filter(Array.isArray).length;

const displayResult = (arr) => {
    console.log(`Number of arrays inside the said array: ${countArrays(arr)}`);
};

displayResult([2,8,[6],3,3,5,3,4,[5,4]]);  
// Output: Number of arrays inside the said array: 2

displayResult([2,8,[6,3,3],[4],5,[3,4,[5,4]]]);  
// Output: Number of arrays inside the said array: 3
