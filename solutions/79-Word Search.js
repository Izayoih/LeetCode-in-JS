/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (board.length === 0) return false

  const visited = Array(board.length)
    .fill()
    .map(() => Array(board[0].length).fill(false))

  const dfs = (x, y, pos) => {
    if (
      x < 0 ||
      y < 0 ||
      x > board.length - 1 ||
      y > board[0].length - 1 ||
      visited[x][y] ||
      board[x][y] !== word[pos]
    )
      return false

    if (pos === word.length - 1) return true

    visited[x][y] = true

    if (
      dfs(x - 1, y, pos + 1) ||
      dfs(x, y - 1, pos + 1) ||
      dfs(x + 1, y, pos + 1) ||
      dfs(x, y + 1, pos + 1)
    ) {
      return true
    }

    visited[x][y] = false
    return false
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        if (dfs(row, col, 0)) return true
      }
    }
  }

  return false
}
