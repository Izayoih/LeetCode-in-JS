/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let pos = -1
  const len = nums.reduce((acc, cur, index) => {
    if (cur === 0) {
      let length = index - pos - 1
      pos = index
      return length > acc ? length : acc
    }
    return acc
  }, 0)
  let rest = 0
  if (pos !== nums.length - 1) {
    rest = nums.length - 1 - pos
  }
  return rest > len ? rest : len
}
