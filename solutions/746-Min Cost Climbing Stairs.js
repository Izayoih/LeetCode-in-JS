/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [cost[0], cost[1]]

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i], dp[i - 1] + cost[i])
  }

  return Math.min(dp[dp.length - 1], dp[dp.length - 2])
}
