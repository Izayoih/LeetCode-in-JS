/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const rest = target - nums[i]

    for (let j = 1 + i; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue

      let start = j + 1
      let end = nums.length - 1
      while (start < end) {
        const sum = nums[j] + nums[start] + nums[end]
        if (sum === rest) {
          result.push([nums[i], nums[j], nums[start], nums[end]])
          start++
          end--
          while (start < end && nums[start] === nums[start - 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--
          }
        }

        if (sum > rest) {
          end--
        }

        if (sum < rest) {
          start++
        }
      }
    }
  }

  return result
}
