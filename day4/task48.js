const isPrime = (num) => {
    if (num < 2 || (num % 2 === 0 && num !== 2)) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};


const checkAllPrimes = (arr) => {
    console.log(`Original array of integers: ${arr.join(",")}`);
    const result = arr.every(isPrime);
    console.log(`In the said array check every numbers are prime or not! ${result}`);
    return result;
};


checkAllPrimes([2, 3, 5, 7]);  // Output: true
checkAllPrimes([2, 3, 5, 7, 8]); // Output: false
