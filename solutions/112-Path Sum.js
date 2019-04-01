/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false
  let result = false

  const dfs = (node, acc) => {
    if (result) return

    if (node.left === null && node.right === null) {
      if (node.val + acc === sum) {
        result = true
      }
      return
    }

    if (node.left !== null) dfs(node.left, acc + node.val)
    if (node.right !== null) dfs(node.right, acc + node.val)
  }

  dfs(root, 0)

  return result
}
