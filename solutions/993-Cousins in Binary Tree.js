/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xParent = 0
  let xDepth = 0
  let yParent = 0
  let yDepth = 0

  const helper = (node, depth) => {
    if (node === null) return

    if (node.left) {
      if (node.left.val === x) xParent = node.val
      if (node.left.val === y) yParent = node.val
    }

    if (node.right) {
      if (node.right.val === x) xParent = node.val
      if (node.right.val === y) yParent = node.val
    }

    if (node.val === x) xDepth = depth
    if (node.val === y) yDepth = depth

    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 0)

  return xParent !== yParent && xDepth === yDepth
}
