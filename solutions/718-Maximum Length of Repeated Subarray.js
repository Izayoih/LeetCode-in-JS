/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  if (A.length === 0 || B.length === 0) return 0

  const dp = Array(B.length + 1)
    .fill()
    .map(() => Array(A.length + 1).fill(0))
  let result = 0

  for (let row = 1; row <= B.length; row++) {
    for (let col = 1; col <= A.length; col++) {
      if (A[col - 1] === B[row - 1]) {
        dp[row][col] = dp[row - 1][col - 1] + 1
        result = Math.max(result, dp[row][col])
      }
    }
  }

  return result
}
