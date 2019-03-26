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
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const order = []
  const inorder = node => {
    if (node === null) return

    inorder(node.left)
    order.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  let left = 0
  let right = order.length - 1
  while (left < right) {
    const sum = order[left] + order[right]
    if (sum === k) return true

    if (sum > k) {
      right--
    } else if (sum < k) {
      left++
    }
  }
  return false
}
