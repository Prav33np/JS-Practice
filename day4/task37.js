function array_filled(n, val) {
    return Array(n).fill(val);
}

console.log(array_filled(3, 'default value')); 
// Output: ["default value", "default value", "default value"]

console.log(array_filled(4, 'password')); 
// Output: ["password", "password", "password"]
