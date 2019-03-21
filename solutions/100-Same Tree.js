/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const compare = (n1, n2) => {
    if (n1 === null && n2 === null) return true
    if (n1 === null || n2 === null) return false

    if (n1.val === n2.val) {
      return compare(n1.left, n2.left) && compare(n1.right, n2.right)
    }
    return false
  }

  return compare(p, q)
}
