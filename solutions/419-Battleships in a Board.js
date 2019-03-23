/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const visited = Array(board.length)
    .fill()
    .map(() => Array(board[0].length).fill(false))

  let count = 0

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'X' && visited[row][col] === false) {
        count++
        visited[row][col] = true

        let y = col + 1
        while (y < board[0].length && board[row][y] === 'X') {
          visited[row][y] = true
          y++
        }

        let x = row + 1
        while (x < board.length && board[x][col] === 'X') {
          visited[x][col] = true
          x++
        }
      }
    }
  }

  return count
}
