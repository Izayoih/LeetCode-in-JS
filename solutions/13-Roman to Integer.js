/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = map[s[s.length - 1]]

  for (let i = s.length - 2; i >= 0; i--) {
    const [cur, right] = [map[s[i]], map[s[i + 1]]]
    result += cur < right ? -cur : cur
  }
  return result
}
