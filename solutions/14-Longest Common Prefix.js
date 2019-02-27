/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs == null || strs.length === 0) return ''

  const [headStr, ...restStrs] = strs
  const minStr = restStrs.reduce((acc, cur) => {
    return cur.length < acc.length ? cur : acc
  }, headStr)

  let low = 1
  let high = minStr.length
  let mid = 0
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    let prefix = minStr.substring(0, mid)

    if (strs.filter(str => str.substring(0, mid) === prefix).length !== strs.length) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return strs[0].substring(0, Math.floor((low + high) / 2))
}
