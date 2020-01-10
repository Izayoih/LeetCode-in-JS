/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  const map = new Map()
  let max = 0

  const helper = node => {
    if (node === null) return 0
    const sum = node.val + helper(node.left) + helper(node.right)

    if (map.get(sum)) map.set(sum, map.get(sum) + 1)
    else map.set(sum, 1)

    max = Math.max(max, map.get(sum))

    return sum
  }

  helper(root)

  const result = []
  map.forEach((val, key) => val === max && result.push(key))

  return result
}
