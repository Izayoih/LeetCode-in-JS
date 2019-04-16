/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if (n === 2) return 1
  if (n === 3) return 2

  let res = 1
  let rest = n
  while (rest >= 3) {
    res = res * 3
    rest = rest - 3
  }

  if (rest === 1) res = (res / 3) * 4
  if (rest === 2) res = res * 2

  return res
}
