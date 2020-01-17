/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
  let reminderOne = []
  let reminderTwo = []
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    sum += val
    if (val % 3 === 1) {
      reminderOne.push(val)
    } else if (val % 3 === 2) {
      reminderTwo.push(val)
    }
  }

  reminderOne.sort((a, b) => a - b)
  reminderTwo.sort((a, b) => a - b)

  let diff = 0
  if (sum % 3 === 0) return sum
  if (sum % 3 === 1) {
    if (reminderTwo.length > 1) {
      diff = Math.min(reminderOne[0], reminderTwo[0] + reminderTwo[1])
    } else {
      diff = reminderOne[0]
    }
  } else if (sum % 3 === 2) {
    if (reminderOne.length > 1) {
      diff = Math.min(reminderTwo[0], reminderOne[0] + reminderOne[1])
    } else {
      diff = reminderTwo[0]
    }
  }

  return sum - diff
}
