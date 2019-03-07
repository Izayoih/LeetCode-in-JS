/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  if (nums.length === 0) return 1

  nums.sort((a, b) => a - b)
  let p = 0
  while (nums[p] && nums[p] <= 0) {
    p++
  }

  if (p === nums.length || nums[p] > 1) {
    return 1
  }

  for (let i = p + 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 1) {
      return nums[i - 1] + 1
    }
  }

  return nums[nums.length - 1] + 1
}
