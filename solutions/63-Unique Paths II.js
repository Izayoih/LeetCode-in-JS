/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const n = obstacleGrid.length
  const m = obstacleGrid[0].length
  const array = Array(n)
    .fill()
    .map(() => [])

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] === 1) {
        array[i][j] = -1
        continue
      }

      if (i === 0 && j === 0 && obstacleGrid[i][j] === 0) {
        array[0][0] = 1
        continue
      }

      if (i === 0 && j > 0) {
        array[i][j] = array[i][j - 1] === -1 ? -1 : 1
      } else if (j === 0 && i > 0) {
        array[i][j] = array[i - 1][j] === -1 ? -1 : 1
      } else {
        const top = array[i - 1][j] === -1 ? 0 : array[i - 1][j]
        const left = array[i][j - 1] === -1 ? 0 : array[i][j - 1]
        const sum = top + left
        array[i][j] = sum === 0 ? -1 : sum
      }
    }
  }

  const result = array[n - 1][m - 1]
  if (result === 0) {
    return 1
  }
  if (result === -1) {
    return 0
  }
  return result
}
