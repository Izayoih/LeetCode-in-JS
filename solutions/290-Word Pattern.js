/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const p2s = {}
  const s2p = {}
  const strArray = str.split(' ')
  if (pattern.length !== strArray.length) return false

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i]
    if (!p2s[c] && !s2p[strArray[i]]) {
      p2s[c] = strArray[i]
      s2p[strArray[i]] = c
    } else if (p2s[c] && p2s[c] !== strArray[i]) {
      return false
    } else if (s2p[strArray[i]] && s2p[strArray[i]] !== c) {
      return false
    }
  }

  return true
}
