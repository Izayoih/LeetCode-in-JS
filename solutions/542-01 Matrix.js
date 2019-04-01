/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  if (matrix.length === 0) return matrix
  const rows = matrix.length
  const cols = matrix[0].length
  const result = Array(rows)
    .fill()
    .map(() => Array(cols).fill(Number.MAX_SAFE_INTEGER))

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        result[row][col] = 0
      } else {
        if (row > 0) {
          result[row][col] = Math.min(result[row][col], result[row - 1][col] + 1)
        }
        if (col > 0) {
          result[row][col] = Math.min(result[row][col], result[row][col - 1] + 1)
        }
      }
    }
  }

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      if (row < rows - 1) {
        result[row][col] = Math.min(result[row][col], result[row + 1][col] + 1)
      }
      if (col < cols - 1) {
        result[row][col] = Math.min(result[row][col], result[row][col + 1] + 1)
      }
    }
  }

  return result
}
