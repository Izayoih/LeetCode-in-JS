/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let pos = 0
  let increase = true
  let decrease = true

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] < A[i + 1]) decrease = false
    if (A[i] > A[i + 1]) increase = false
  }

  return increase || decrease
}
