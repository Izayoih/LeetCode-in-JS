/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length === 0) return 0
  let total = 0

  for (let i = 1; i < timeSeries.length; i++) {
    const diff = timeSeries[i] - timeSeries[i - 1]
    if (diff >= duration) {
      total += duration
    } else {
      total += diff
    }
  }

  return total + duration
}
