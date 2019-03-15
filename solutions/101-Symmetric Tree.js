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
var isSymmetric = function(root) {
  const compare = (n1, n2) => {
    if (n1 === null && n2 === null) return true
    if (n1 === null || n2 === null) return false

    if (n1.val === n2.val) {
      return compare(n1.left, n2.right) && compare(n1.right, n2.left)
    }
    return false
  }

  return compare(root, root)
}
