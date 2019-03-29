/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = []

  for (let i = 0; i < asteroids.length; i++) {
    inner: {
      const current = asteroids[i]
      while (stack.length > 0 && stack[stack.length - 1] > 0 && current < 0) {
        const top = stack[stack.length - 1]
        if (top < -current) {
          stack.pop()
          continue
        } else if (top === -current) {
          stack.pop()
        }
        break inner
      }
      stack.push(current)
    }
  }

  return stack
}
