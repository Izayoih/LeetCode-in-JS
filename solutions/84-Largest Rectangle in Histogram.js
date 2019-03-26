/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const stack = []
  heights.push(0)
  let result = 0
  let i = 0
  while (i < heights.length) {
    const top = stack[stack.length - 1]
    if (stack.length === 0 || heights[top] <= heights[i]) {
      stack.push(i)
      i++
    } else {
      const index = stack.pop()
      result = Math.max(
        result,
        heights[index] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1)
      )
    }
  }
  return result
}
