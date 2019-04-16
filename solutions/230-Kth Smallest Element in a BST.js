/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0
  let flag = false
  let res = 0

  const travel = node => {
    if (node === null) return

    !flag && travel(node.left)

    if (++count === k) {
      flag = true
      return (res = node.val)
    }

    !flag && travel(node.right)
  }

  travel(root)

  return res
}
