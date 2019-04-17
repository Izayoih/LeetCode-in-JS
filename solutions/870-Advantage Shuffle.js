/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function(A, B) {
  const a = [...A].sort((a, b) => a - b)
  const b = B.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0])
  const rest = []
  const result = Array(A.length)

  while (a.length) {
    if (a[0] > b[0][0]) {
      result[b[0][1]] = a[0]
      a.shift()
      b.shift()
    } else {
      rest.push(a.shift())
    }
  }

  rest.forEach((num, index) => (result[b[index][1]] = num))

  return result
}
