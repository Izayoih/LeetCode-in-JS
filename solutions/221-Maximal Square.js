/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  const rows = matrix.length || 0
  const cols = matrix[0] ? matrix[0].length : 0
  let maxLength = 0
  const dp = Array(rows + 1)
    .fill()
    .map(() => Array(cols + 1).fill(0))

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1
        maxLength = Math.max(maxLength, dp[i][j])
      }
    }
  }

  return maxLength * maxLength
}
