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
var sumNumbers = function(root) {
  if (root === null) return 0
  let result = 0

  const dfs = (node, str) => {
    if (node.left === null && node.right === null) {
      result = result + Number(str + node.val)
      return
    }

    if (node.left !== null) dfs(node.left, str + node.val)
    if (node.right !== null) dfs(node.right, str + node.val)
  }

  dfs(root, '')

  return result
}
