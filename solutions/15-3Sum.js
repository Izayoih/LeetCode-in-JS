/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let start = i + 1
    let end = nums.length - 1

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]
      if (sum === 0) {
        result.push([nums[i], nums[start], nums[end]])
        start++
        end--
        while (start < end && nums[start] === nums[start - 1]) {
          start++
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end--
        }
      }
      if (sum > 0) {
        end--
      }
      if (sum < 0) {
        start++
      }
    }
  }
  return result
}
