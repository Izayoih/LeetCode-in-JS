/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var len = nums.length
  var o,
    result = []
  for (var i = 0; i < len - 1; i++) {
    o = nums.slice(i + 1).indexOf(target - nums[i])
    if (o !== -1) {
      result.push(i)
      result.push(o + i + 1)
      return result
    }
  }
}
