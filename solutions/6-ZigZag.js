/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var res = ''
  var len = s.length
  if (numRows === 1 || len === 0) { return s }
  for (var i = 0; i < numRows; i++) {
      var j = i
      if (i === 0 || i === numRows - 1) {
          while (j <= len - 1) {
              res += s.charAt(j)
              j = j + 2 * numRows - 2
          }
      } else {
          while (j <= len - 1) {
              res = res + s.charAt(j) + s.charAt(j + 2 * numRows - 2 - 2 * i)
              j = j + 2 * numRows - 2
          }
      }
  }
  return res
}
