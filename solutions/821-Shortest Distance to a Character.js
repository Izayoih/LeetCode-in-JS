/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  const result = []
  let prev = -1

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === C) prev = i
    result[i] = prev === -1 ? -1 : i - prev
  }

  prev = -1
  for (let j = S.length - 1; j >= 0; j--) {
    if (S.charAt(j) === C) prev = j
    if (prev !== -1) {
      result[j] = result[j] === -1 ? prev - j : Math.min(prev - j, result[j])
    }
  }

  return result
}
