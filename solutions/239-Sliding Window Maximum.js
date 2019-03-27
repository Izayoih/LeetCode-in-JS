/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const queue = []
  const max = []

  for (let i = 0; i < nums.length; i++) {
    if (queue.length === 0 || nums[queue[queue.length - 1]] >= nums[i]) {
      queue.push(i)
    } else {
      while (nums[queue[queue.length - 1]] < nums[i]) {
        queue.pop()
      }
      queue.push(i)
    }
    if (queue[0] === i - k) {
      queue.shift()
    }
    if (i >= k - 1) {
      max.push(nums[queue[0]])
    }
  }

  return max
}
