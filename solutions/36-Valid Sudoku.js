/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const row = Array(9)
    .fill()
    .map(() => ({}))
  const col = Array(9)
    .fill()
    .map(() => ({}))
  const block = Array(9)
    .fill()
    .map(() => ({}))

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const k = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (row[i][num] === 1 || col[j][num] === 1 || block[k][num] === 1) {
          return false
        }
        row[i][num] = 1
        col[j][num] = 1
        block[k][num] = 1
      }
    }
  }
  return true
}
