/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const inDict = word => wordDict.indexOf(word) !== -1
  const dp = Array(s.length + 1).fill(false)
  dp[0] = true

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (dp[j] && inDict(s.substring(j, i + 1))) {
        dp[i + 1] = true
        break
      }
    }
  }

  return dp[s.length]
}
