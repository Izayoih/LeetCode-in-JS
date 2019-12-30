/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let carry = K
  for (let i = A.length - 1; i >= 0; i--) {
    A[i] = A[i] + carry
    carry = Math.floor(A[i] / 10)
    A[i] = A[i] % 10
  }

  if (carry > 0) {
    A = carry
      .toString()
      .split('')
      .map(Number)
      .concat(A)
  }

  return A
}
