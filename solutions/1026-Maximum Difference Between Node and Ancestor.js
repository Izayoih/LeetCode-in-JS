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
var maxAncestorDiff = function(root) {
  const helper = (node, min, max) => {
    if (node === null) return max - min

    min = Math.min(min, node.val)
    max = Math.max(max, node.val)

    return Math.max(helper(node.left, min, max), helper(node.right, min, max))
  }

  return helper(root, root.val, root.val)
}
