// 用dp dp[i][0]表示把第i的数翻成0需要的次数 dp[i][1]同理

/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function(S) {
  const min = []
  const length = S.length
  for (let i = 0; i < length; i++) {
    min.push([])
    if (S[i] === '1') {
      if (i === 0) {
        min[i][0] = 1
        min[i][1] = 0
      } else {
        min[i][0] = min[i - 1][0] + 1
        min[i][1] = Math.min(min[i - 1][1], min[i - 1][0])
      }
    } else {
      if (i === 0) {
        min[i][0] = 0
        min[i][1] = 1
      } else {
        min[i][0] = min[i - 1][0]
        min[i][1] = Math.min(min[i - 1][1], min[i - 1][0]) + 1
      }
    }
  }
  return Math.min(min[length - 1][0], min[length - 1][1])
}
