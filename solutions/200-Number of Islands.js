/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const visited = Array(grid.length)
    .fill()
    .map(() => Array(grid[0].length).fill(false))
  let count = 0

  const dfs = (x, y) => {
    if (x < 0 || y < 0 || x >= grid[0].length || y >= grid.length) return
    if (visited[y][x] || grid[y][x] === '0') return
    visited[y][x] = true
    dfs(x - 1, y)
    dfs(x, y - 1)
    dfs(x + 1, y)
    dfs(x, y + 1)
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === '1' && !visited[y][x]) {
        count++
        dfs(x, y)
      }
    }
  }

  return count
}
