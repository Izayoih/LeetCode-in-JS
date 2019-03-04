/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const resultSet = []
  dfs(resultSet, '', n, n)
  return resultSet
}

const dfs = function(resultSet, s, left, right) {
  if (left > right) {
    return false
  }

  if (left === 0 && right === 0) {
    resultSet.push(s)
  }

  if (left > 0) {
    dfs(resultSet, s + '(', left - 1, right)
  }

  if (right > 0) {
    dfs(resultSet, s + ')', left, right - 1)
  }
}
