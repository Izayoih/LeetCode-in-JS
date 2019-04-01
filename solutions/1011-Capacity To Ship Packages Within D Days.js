/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = Math.max.apply(null, weights)
  let right = weights.reduce((acc, cur) => acc + cur)

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    let sum = 0
    let day = 0
    for (let i = 0; i < weights.length; i++) {
      if (sum + weights[i] > mid) {
        day++
        sum = 0
      }
      sum += weights[i]
    }
    if (day < D) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return left
}
