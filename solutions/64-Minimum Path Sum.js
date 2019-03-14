/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const n = grid.length
  const m = grid[0].length
  const array = Array(grid.length)
    .fill()
    .map(() => [])
  array[0][0] = grid[0][0]

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue

      if (i === 0) {
        array[i][j] = array[i][j - 1] + grid[i][j]
      } else if (j === 0) {
        array[i][j] = array[i - 1][j] + grid[i][j]
      } else {
        array[i][j] = grid[i][j] + Math.min(array[i][j - 1], array[i - 1][j])
      }
    }
  }

  return array[n - 1][m - 1]
}
