/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let count = 0

  const helper = (k, acc) => {
    if (k === nums.length) {
      if (acc === S) count++
    } else {
      helper(k + 1, acc + nums[k])
      helper(k + 1, acc - nums[k])
    }
  }

  helper(0, 0)

  return count
}
