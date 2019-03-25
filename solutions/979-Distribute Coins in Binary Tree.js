/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
  let result = 0

  const dfs = node => {
    if (node === null) return 0
    const left = dfs(node.left)
    const right = dfs(node.right)
    result = result + Math.abs(left) + Math.abs(right)
    return node.val + left + right - 1
  }
  dfs(root)

  return result
}
