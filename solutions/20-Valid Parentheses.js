/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true

  const array = s.split('')
  const stack = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < array.length; i++) {
    if (map.hasOwnProperty(array[i])) {
      stack.push(array[i])
    } else {
      if (map[stack.pop()] !== array[i]) return false
    }
  }

  return stack.length === 0
}
