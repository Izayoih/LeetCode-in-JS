/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let min = null
  let result = null

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      const diff = Math.abs(target - sum)
      if (result === null || diff < min) {
        result = sum
        min = diff
      }
      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return result
}
