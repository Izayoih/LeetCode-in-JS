/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var sArr = s.split('')
  if (sArr.length === 0) return 0
  var res = sArr[0]
  var length = 1
  for (var i = 1; i < sArr.length; i++) {
    var index = res.lastIndexOf(sArr[i])
    if (index === -1) {
      res += sArr[i]
    } else {
      length = length > res.length ? length : res.length
      res = res.substr(index + 1) + sArr[i]
    }
  }
  length = length > res.length ? length : res.length
  return length
}
