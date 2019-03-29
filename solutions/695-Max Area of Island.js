/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0
  const visited = Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(false))

  const dfs = (x, y) => {
    if (
      x < 0 ||
      y < 0 ||
      x >= grid.length ||
      y >= grid[0].length ||
      visited[x][y] ||
      grid[x][y] === 0
    )
      return 0

    visited[x][y] = true
    return 1 + dfs(x - 1, y) + dfs(x, y - 1) + dfs(x + 1, y) + dfs(x, y + 1)
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      max = Math.max(max, dfs(row, col))
    }
  }

  return max
}
