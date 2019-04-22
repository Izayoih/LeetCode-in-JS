/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = []

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (token === '+') {
      stack.push(stack.pop() + stack.pop())
    } else if (token === '-') {
      stack.push(-stack.pop() + stack.pop())
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop())
    } else if (token === '/') {
      stack.push(Math.trunc((1 / stack.pop()) * stack.pop()))
    } else {
      stack.push(Number(token))
    }
  }

  return stack.pop()
}
