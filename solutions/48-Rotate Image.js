// 以右上到左下为轴 先做镜像 再整个数组reverse
// 还有一种是四个数顺时针交换
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = n - 1 - i; j >= 0; j--) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - 1 - j][n - 1 - i]
      matrix[n - 1 - j][n - 1 - i] = temp
    }
  }
  matrix.reverse()
}
