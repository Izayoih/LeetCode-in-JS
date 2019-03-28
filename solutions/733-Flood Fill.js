/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const visited = Array(image.length)
    .fill()
    .map(() => Array(image[0].length).fill(false))

  const origin = image[sr][sc]
  const bfs = (x, y) => {
    if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) return
    if (visited[x][y] || image[x][y] !== origin) return
    visited[x][y] = true
    image[x][y] = newColor
    bfs(x - 1, y)
    bfs(x, y - 1)
    bfs(x + 1, y)
    bfs(x, y + 1)
  }

  bfs(sr, sc)
  return image
}
