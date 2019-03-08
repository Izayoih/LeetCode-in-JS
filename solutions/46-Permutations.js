/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []

  const helper = function(list, rest) {
    if (rest.length === 0) {
      return result.push(list)
    }
    for (let i = 0; i < rest.length; i++) {
      helper([...list, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)])
    }
  }

  helper([], nums)

  return result
}
