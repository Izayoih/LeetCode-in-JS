/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0

  return helper(nums, target, 0, nums.length - 1)
}

const helper = function(nums, target, left, right) {
  const mid = Math.floor((left + right) / 2)

  if (left > right) {
    return left
  }
  if (target === nums[mid]) {
    return mid
  }
  if (target < nums[mid]) {
    return helper(nums, target, left, mid - 1)
  }
  if (target > nums[mid]) {
    return helper(nums, target, mid + 1, right)
  }
}
