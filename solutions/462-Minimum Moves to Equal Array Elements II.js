/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b)
  let i = 0
  let j = nums.length - 1
  let sum = 0

  while (i < j) {
    sum += nums[j--] - nums[i++]
  }

  return sum
}
