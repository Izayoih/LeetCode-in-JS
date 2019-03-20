/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const res = [0]
  for (let i = 1; i <= num; i++) {
    res[i] = res[i >> 1]
    if (i % 2 !== 0) res[i]++
  }
  return res
}
