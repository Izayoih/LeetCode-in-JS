/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix[0]) return false

  let i = 0
  let j = matrix[0].length - 1
  let current = null
  while (j >= 0 && i < matrix.length) {
    current = matrix[i][j]
    if (target === current) return true

    if (target > current) {
      i++
    } else {
      j--
    }
  }
  return false
}
