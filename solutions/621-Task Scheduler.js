/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const arr = Array(26).fill(0)
  tasks.forEach(c => arr[c.charCodeAt() - 65]++)

  arr.sort((a, b) => b - a)
  const max = arr[0] - 1
  let slots = max * n

  for (let i = 1; i < 26 && arr[i] > 0; i++) {
    slots -= Math.min(max, arr[i])
  }

  return slots > 0 ? slots + tasks.length : tasks.length
}
