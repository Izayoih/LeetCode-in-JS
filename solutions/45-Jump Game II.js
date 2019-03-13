// last 最远可跳的位置
// current 目前跳到的位置

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let count = 0
  let last = 0
  let current = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > current) {
      current = last
      count++
    }
    last = Math.max(last, i + nums[i])
  }
  return count
}
