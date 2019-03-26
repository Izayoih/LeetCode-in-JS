/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur)
  const min = Math.min.apply(null, nums)

  return sum - min * nums.length
}
