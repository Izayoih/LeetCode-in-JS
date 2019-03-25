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
var minDepth = function(root) {
  if (root === null) return 0
  let result = Number.MAX_SAFE_INTEGER

  const helper = (node, depth) => {
    if (node === null) return
    if (node.left === null && node.right === null) result = Math.min(result, depth)

    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 1)
  return result
}
