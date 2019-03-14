// current 当前记录的累加值 第i位大于current时从第i位开始重新累加
// max 记录最大和

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let current = nums[0]

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i])
    max = Math.max(max, current)
  }
  return max
}
