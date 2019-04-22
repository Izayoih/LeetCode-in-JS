/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const RPN = []
  const stack = []
  s = s.replace(/\s+/g, '')

  for (let i = 0; i < s.length; i++) {
    const token = s[i]

    if (token === '(') {
      stack.push(token)
    } else if (token === '+' || token === '-') {
      while (1) {
        const temp = stack[stack.length - 1]
        if (!temp || temp === '(') {
          stack.push(token)
          break
        }

        RPN.push(stack.pop())
      }
    } else if (token === ')') {
      while (1) {
        const temp = stack.pop()
        if (temp === '(') break

        RPN.push(temp)
      }
    } else {
      let right = i
      while (/\d/.test(s[right + 1])) {
        right++
      }
      RPN.push(Number(s.substring(i, right + 1)))
      i = right
    }
  }

  while (stack.length) {
    RPN.push(stack.pop())
  }

  for (let i = 0; i < RPN.length; i++) {
    const token = RPN[i]

    if (token === '+') {
      stack.push(stack.pop() + stack.pop())
    } else if (token === '-') {
      stack.push(-stack.pop() + stack.pop())
    } else {
      stack.push(token)
    }
  }

  return stack.pop()
}
