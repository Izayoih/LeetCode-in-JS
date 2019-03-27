/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  let max = 0
  let left = 0
  for (let i = 0; i < A.length; i++) {
    max = Math.max(max, left + A[i] - i)
    left = Math.max(left, A[i] + i)
  }

  return max
}
