/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function Trie(word = null) {
  this.word = word
  this.child = []
}

function dfs(board, root, x, y, result) {
  const char = board[x][y]
  const index = char.charCodeAt() - 97

  if (!root.child[index] || board[x][y] === '#') return

  root = root.child[index]
  if (root.word !== null) {
    result.push(root.word)
    root.word = null
  }

  board[x][y] = '#'
  if (x > 0) dfs(board, root, x - 1, y, result)
  if (y > 0) dfs(board, root, x, y - 1, result)
  if (x < board.length - 1) dfs(board, root, x + 1, y, result)
  if (y < board[0].length - 1) dfs(board, root, x, y + 1, result)
  board[x][y] = char
}

var findWords = function(board, words) {
  const root = new Trie()
  let p = null
  const result = []

  for (word of words) {
    p = root

    for (char of word) {
      const index = char.charCodeAt() - 97
      if (!p.child[index]) {
        p.child[index] = new Trie()
      }
      p = p.child[index]
    }

    p.word = word
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, root, i, j, result)
    }
  }

  return result
}
