/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const cache = [0, 1]
  if (N < 2) return cache[N]

  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2]
  }

  return cache[N]
}
