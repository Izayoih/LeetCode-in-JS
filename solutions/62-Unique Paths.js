/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const array = Array(n)
    .fill()
    .map(() => [])
  array[0][0] = 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue

      if (i === 0) {
        array[i][j] = 1
      } else if (j === 0) {
        array[i][j] = 1
      } else {
        array[i][j] = array[i - 1][j] + array[i][j - 1]
      }
    }
  }

  return array[n - 1][m - 1]
}
