/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var len = height.length
  var left = 0,
    right = len - 1
  var maxV = 0
  while (left < right) {
    var V = (right - left) * Math.min(height[right], height[left])
    height[right] < height[left] ? right-- : left++
    if (V > maxV) {
      maxV = V
    }
  }
  return maxV
}
