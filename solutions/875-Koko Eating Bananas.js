/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  let left = 1
  let right = Math.max.apply(null, piles)
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    let time = piles.reduce((acc, cur) => {
      acc = acc + Math.ceil(cur / mid)
      return acc
    }, 0)
    if (time <= H) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}
