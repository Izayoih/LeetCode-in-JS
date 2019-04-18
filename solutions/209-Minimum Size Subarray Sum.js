/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let min = Number.MAX_SAFE_INTEGER
  let left = 0
  let sum = 0

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= s) {
      min = Math.min(right - left + 1, min)
      sum -= nums[left]
      left++
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? 0 : min
}
