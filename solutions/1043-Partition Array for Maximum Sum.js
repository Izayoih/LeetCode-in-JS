/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var maxSumAfterPartitioning = function(A, K) {
  const dp = Array(A.length + 1).fill(0)

  for (let i = 1; i < A.length + 1; i++) {
    let max = Number.MIN_SAFE_INTEGER
    for (let j = 1; j <= K && i - j >= 0; j++) {
      max = Math.max(max, A[i - j])
      dp[i] = Math.max(dp[i], dp[i - j] + max * j)
    }
  }
  return dp[A.length]
}
