/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const factorial = [1]
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i
  }

  let candidates = '123456789'
  let res = ''
  k = k - 1

  for (let j = n - 1; j >= 0; j--) {
    const pos = Math.floor(k / factorial[j])
    k = k % factorial[j]
    res = res + candidates[pos]
    candidates = candidates.slice(0, pos) + candidates.slice(pos + 1)
  }

  return res
}
