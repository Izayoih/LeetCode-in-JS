/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  let a = String(N)
    .split('')
    .map(Number)

  let i = 1
  while (i < a.length && a[i - 1] <= a[i]) i++
  while (i > 0 && i < a.length && a[i - 1] > a[i]) {
    a[i - 1]--
    i--
  }
  for (let j = i + 1; j < a.length; j++) {
    a[j] = 9
  }

  return Number(a.join(''))
}
