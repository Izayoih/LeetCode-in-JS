/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let result = 0
  let acc = 0

  S.split('').forEach(s => {
    if (s === '(') return ++acc
    if (acc === 0) {
      result++
    } else {
      acc--
    }
  })

  return result + acc
}
