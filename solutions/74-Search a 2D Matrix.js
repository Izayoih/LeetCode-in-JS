/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false

  let x = matrix[0].length
  let y = 0

  while (x >= 0 && y < matrix.length) {
    if (matrix[y][x] === target) return true

    if (matrix[y][x] < target) {
      y++
    } else {
      x--
    }
  }

  return false
}
