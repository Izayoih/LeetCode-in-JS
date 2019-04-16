/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  if (root === null) return false
  const val = root.val
  let flag = true

  const helper = node => {
    if (node === null) return false

    if (node.val !== val) {
      flag = false
      return false
    }

    flag && helper(node.left)
    flag && helper(node.right)
  }

  helper(root)
  return flag
}
