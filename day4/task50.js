const sumNumbers = (arr) => arr.filter((x) => typeof x === "number").reduce((sum, num) => sum + num, 0);

const displayResult = (arr) => {
    console.log(`Original array: ${arr.join(",")}`);
    console.log(`Sum all numbers of the said array: ${sumNumbers(arr)}`);
};

displayResult([2, "11", 3, "a2", false, 5, 7, 1]);  
// Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18

displayResult([2, 3, 0, 5, 7, 8, true, false]);  
// Output:
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25
