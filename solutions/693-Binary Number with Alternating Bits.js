/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let s1 = 1
  let s2 = 2
  while (s1 < n && s2 < n) {
    s1 = s1 * 4 + 1
    s2 = s2 * 4 + 2
  }

  return n === s1 || n === s2
}
