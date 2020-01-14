/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let sum1 = 0
  let sum2 = t.charCodeAt(t.length - 1)

  for (let i = 0; i < s.length; i++) {
    sum1 += s.charCodeAt(i)
    sum2 += t.charCodeAt(i)
  }

  return String.fromCharCode(sum2 - sum1)
}
