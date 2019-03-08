/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = []

  nums.sort((a, b) => a - b)

  const helper = function(list, rest) {
    if (rest.length === 0) {
      return result.push(list)
    }
    for (let i = 0; i < rest.length; i++) {
      if (i > 0 && rest[i] === rest[i - 1]) continue
      helper([...list, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)])
    }
  }

  helper([], nums)

  return result
}
