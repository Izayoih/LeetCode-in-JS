/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const length = nums.length
  const result = Array(length).fill(1)
  const left = Array(length).fill(1)
  const right = Array(length).fill(1)

  for (let i = 1; i < length; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }
  for (let i = length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }
  for (let i = 0; i < length; i++) {
    result[i] = left[i] * right[i]
  }

  return result
}
