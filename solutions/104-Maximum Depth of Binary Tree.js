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
var maxDepth = function(root) {
  let result = 0
  const helper = (node, depth) => {
    if (node === null) return

    if (depth > result) {
      result = depth
    }
    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 1)
  return result
}
