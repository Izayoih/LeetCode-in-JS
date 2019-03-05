/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let pos = 0
  nums.forEach(num => {
    if (num !== nums[pos]) {
      nums[++pos] = num
    }
  })
  return pos + 1
}
