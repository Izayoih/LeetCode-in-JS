/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]]

  nums.forEach(num => {
    const length = result.length
    for (let i = 0; i < length; i++) {
      result.push([...result[i], num])
    }
  })

  return result
}
