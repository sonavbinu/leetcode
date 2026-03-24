// Example 1:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

nums = [3, 2, 4];
target = 6;
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (map.has(x) && map.get(x) !== i) {
      return [i, map.get(x)];
    }
  }

  return [];
};
console.log(twoSum(nums, target));
