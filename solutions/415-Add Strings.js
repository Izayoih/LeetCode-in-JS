/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const maxLength = Math.max(num1.length, num2.length)
  const addZero = num => {
    while (num.length < maxLength) num = '0' + num
    return num
  }
  num1.length < num2.length ? (num1 = addZero(num1)) : (num2 = addZero(num2))

  let result = ''
  let up = 0
  for (let i = maxLength - 1; i >= 0; i--) {
    let current = Number(num1[i]) + Number(num2[i])
    current = current + up
    if (i === 0) {
      result = current + result
    } else {
      up = Math.floor(current / 10)
      current = current % 10
      result = current + result
    }
  }

  return result
}
