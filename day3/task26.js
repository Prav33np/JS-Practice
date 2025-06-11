function twoSum(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i]; // Return indices of the pair
        }
        map[nums[i]] = i;
    }
    return [];
}

console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50)); // Output: [2, 3]
