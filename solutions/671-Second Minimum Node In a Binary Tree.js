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
var findSecondMinimumValue = function(root) {
  if (root === null || (root.left === null && root.right === null)) return -1
  if (root.left.val === root.right.val) return -1

  const rootVal = root.val
  let min = Number.MAX_SAFE_INTEGER

  const traval = node => {
    if (node === null) return

    if (node.val !== rootVal) min = Math.min(min, node.val)
    traval(node.left)
    traval(node.right)
  }
  traval(root)

  return min
}
