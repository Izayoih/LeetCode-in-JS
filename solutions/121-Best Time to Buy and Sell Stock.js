/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER
  let max = 0

  prices.forEach(val => {
    if (val < min) {
      min = val
    } else {
      max = Math.max(max, val - min)
    }
  })

  return max
}
