/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1

  let i = 1
  let left = 0
  let right = 0
  while (i < nums.length && nums[i - 1] < nums[i]) {
    i++
  }
  if (target < nums[0]) {
    left = i
    right = nums.length - 1
  } else {
    left = 0
    right = i - 1
  }

  return helper(nums, target, left, right)
}

const helper = function(nums, target, left, right) {
  const mid = Math.floor((left + right) / 2)

  if (left > right) {
    return -1
  }
  if (target < nums[mid]) {
    return helper(nums, target, left, mid - 1)
  }
  if (target > nums[mid]) {
    return helper(nums, target, mid + 1, right)
  }
  if (target === nums[mid]) {
    return mid
  }
}
