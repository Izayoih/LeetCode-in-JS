/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = []
  candidates.sort((a, b) => a - b)

  const dfs = function(list, start, acc) {
    if (acc === target) {
      return result.push(list)
    }
    if (acc > target) {
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue
      dfs([...list, candidates[i]], i + 1, acc + candidates[i])
    }
  }

  dfs([], 0, 0)
  return result
}
