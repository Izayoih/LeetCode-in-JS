/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  candidates.sort()

  const dfs = function(list, start, acc) {
    if (acc === target) {
      return result.push(list)
    }
    if (acc > target) {
      return
    }
    for (let i = start; i < candidates.length; i++) {
      dfs([...list, candidates[i]], i, acc + candidates[i])
    }
  }

  dfs([], 0, 0)
  return result
}
