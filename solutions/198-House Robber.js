/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevNo = 0
  let prevYes = 0

  for (let i = 0; i < nums.length; i++) {
    const pn = prevNo
    prevNo = Math.max(prevNo, prevYes)
    prevYes = pn + nums[i]
  }

  return Math.max(prevNo, prevYes)
}
