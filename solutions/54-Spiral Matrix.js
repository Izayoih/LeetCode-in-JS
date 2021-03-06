/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return []
  const result = []

  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1

  while (true) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    if (++top > bottom) break

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    if (--right < left) break

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i])
    }
    if (--bottom < top) break

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left])
    }
    if (++left > right) break
  }

  return result
}
