/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return []
  const result = []

  const dfs = (node, str) => {
    if (node.left === null && node.right === null) result.push(str + node.val)

    if (node.left !== null) dfs(node.left, str + node.val + '->')
    if (node.right !== null) dfs(node.right, str + node.val + '->')
  }

  dfs(root, '')

  return result
}
