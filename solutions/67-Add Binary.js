/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1
  let j = b.length - 1
  let result = ''
  let carry = 0

  while (i >= 0 || j >= 0) {
    const numA = a.charAt(i) || '0'
    const numB = b.charAt(j) || '0'
    const current = +numA + +numB + carry

    if (current >= 2) carry = 1
    else carry = 0

    result = result + (current % 2).toString()

    i--
    j--
  }

  if (carry === 1) result = result + '1'

  return result
    .split('')
    .reverse()
    .join('')
}
