/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const dp = Array(365).fill(0)
  days.forEach(d => (dp[d] = 1))

  for (let i = 1; i < 366; i++) {
    if (dp[i] === 0) {
      dp[i] = dp[i - 1]
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        Math.min(dp[Math.max(0, i - 7)] + costs[1], dp[Math.max(0, i - 30)] + costs[2])
      )
    }
  }

  return dp[days[days.length - 1]]
}
