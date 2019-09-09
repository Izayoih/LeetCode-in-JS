/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const height = wall.length
  const map = {}
  let max = 0

  for (let i = 0; i < height; i++) {
    const bricks = wall[i]
    let sum = 0

    for (let j = 0; j < bricks.length - 1; j++) {
      sum += bricks[j]
      map[sum] = (map[sum] || 0) + 1
      max = Math.max(max, map[sum])
    }
  }

  return height - max
}
