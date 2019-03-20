/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) return []
  const result = [[1]]

  for (let i = 1; i < numRows; i++) {
    let row = [1]
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j] + result[i - 1][j - 1]
    }
    row.push(1)
    result.push(row)
  }

  return result
}
