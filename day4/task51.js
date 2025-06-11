const isFactorChain = (arr) => arr.every((num, i) => i === 0 || num % arr[i - 1] === 0);

const displayResult = (arr) => {
    console.log(`Original array: ${arr.join(",")}`);
    console.log(`Check the said array is a factor chain or not? ${isFactorChain(arr)}`);
};

displayResult([2, 4, 8, 16, 32]);  
// Output:
// Original array: 2,4,8,16,32
// Check the said array is a factor chain or not? true

displayResult([2, 4, 16, 32, 64]);  
// Output:
// Original array: 2,4,16,32,64
// Check the said array is a factor chain or not? true

displayResult([2, 4, 16, 32, 68]);  
// Output:
// Original array: 2,4,16,32,68
// Check the said array is a factor chain or not? false
