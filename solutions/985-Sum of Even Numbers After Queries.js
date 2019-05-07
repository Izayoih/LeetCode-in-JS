/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let sum = A.reduce((acc, cur) => {
    if (cur % 2) {
      return acc
    }
    return acc + cur
  }, 0)
  const res = []

  queries.forEach(([num, index]) => {
    if (A[index] % 2 === 0) sum -= A[index]
    A[index] += num
    if (A[index] % 2 === 0) sum += A[index]
    res.push(sum)
  })

  return res
}
