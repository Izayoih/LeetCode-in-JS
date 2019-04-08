/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = Array(n)
    .fill()
    .map(() => [])

  let top = 0
  let bottom = n - 1
  let left = 0
  let right = n - 1
  let val = 1

  while (true) {
    for (let i = left; i <= right; i++) {
      result[top][i] = val++
    }
    if (++top > bottom) break

    for (let i = top; i <= bottom; i++) {
      result[i][right] = val++
    }
    if (--right < left) break

    for (let i = right; i >= left; i--) {
      result[bottom][i] = val++
    }
    if (--bottom < top) break

    for (let i = bottom; i >= top; i--) {
      result[i][left] = val++
    }
    if (++left > right) break
  }

  return result
}
