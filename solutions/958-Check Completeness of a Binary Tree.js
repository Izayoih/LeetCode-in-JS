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
var isCompleteTree = function(root) {
  const queue = [root]
  const res = []

  const last = a => a[a.length - 1]

  while (queue.length) {
    const node = queue.shift()
    if (node === null) {
      res.push(null)
    } else {
      if (last(res) === null) return false
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    }
  }

  return true
}
