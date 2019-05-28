/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  if (K === 0) return 1
  const dir = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]]
  let dp = Array(N)
    .fill()
    .map(() => Array(N).fill(1))

  for (let k = 0; k < K; k++) {
    const t = Array(N)
      .fill()
      .map(() => Array(N).fill(0))

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        for (d of dir) {
          const x = i + d[0]
          const y = j + d[1]
          if (x < 0 || y < 0 || x >= N || y >= N) continue
          t[i][j] += dp[x][y]
        }
      }
    }
    dp = t
  }

  return dp[r][c] / Math.pow(8, K)
}
