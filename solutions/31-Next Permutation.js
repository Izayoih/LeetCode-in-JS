/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const swap = function(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const reverseInPlace = function(arr, start, end) {
  let i = start
  let j = end
  while (i < j) {
    swap(arr, i, j)
    i++
    j--
  }
}
var nextPermutation = function(nums) {
  const maxPos = nums.length - 1
  let temp

  let i = maxPos
  while (i > 0 && nums[i - 1] >= nums[i]) {
    i--
  }

  if (i === 0) {
    return nums.reverse()
  }

  let j = i - 1
  while (i < nums.length && nums[i] > nums[j]) {
    i++
  }

  swap(nums, i - 1, j)
  reverseInPlace(nums, j + 1, nums.length - 1)
}
