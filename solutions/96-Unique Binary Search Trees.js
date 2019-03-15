// n=3:
// 根为1时 左子树空f(0) 右子树是以[2,3]生成的BST即f(2) => f(0)*f(2)
// 根为2时 => f(1)*f(1)
// 根为3时 => f(2)*f(0)
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const cache = [1, 1, 2]

  for (let i = 3; i <= n; i++) {
    let sum = 0
    for (let j = 0; j < i; j++) {
      sum += cache[j] * cache[i - j - 1]
    }
    cache[i] = sum
  }

  return cache[n]
}
