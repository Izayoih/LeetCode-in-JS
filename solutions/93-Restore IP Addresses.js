/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = []

  const dfs = (current, rest, k) => {
    if (k === 4) {
      if (rest.length > 3 || rest.length === 0) return false
      if (rest.length > 1 && rest[0] === '0') return false
      if (Number(rest) > 255) return false
      return result.push(current + rest)
    }

    for (let i = 1; i <= 3; i++) {
      const segment = rest.slice(0, i)
      if (segment.length > 1 && rest[0] === '0') return false
      if (Number(segment) > 255) return false
      dfs(current + segment + '.', rest.slice(i), k + 1)
    }
  }

  dfs('', s, 1)

  return result
}
