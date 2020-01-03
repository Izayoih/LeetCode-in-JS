/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let count = 0
  for (let i = 0; i < time.length; i++) {
    for (let j = time.length - 1; j > i; j--) {
      if ((time[i] + time[j]) % 60 === 0) count++
    }
  }

  return count
}
