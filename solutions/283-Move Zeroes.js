/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]])

  for (let i = 0, last = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(last, i)
      last++
    }
  }
}
