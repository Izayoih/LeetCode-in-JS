/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1]

  const left = 0
  const right = nums.length - 1
  return helper(nums, target, left, right)
}

const helper = function(nums, target, left, right) {
  const mid = Math.floor((left + right) / 2)

  if (left > right) {
    return [-1, -1]
  }
  if (target === nums[mid]) {
    let [first, last] = [mid, mid]
    while (nums[first - 1] === target) {
      first--
    }
    while (nums[last + 1] === target) {
      last++
    }
    return [first, last]
  }
  if (target < nums[mid]) {
    return helper(nums, target, left, mid - 1)
  }
  if (target > nums[mid]) {
    return helper(nums, target, mid + 1, right)
  }
}
