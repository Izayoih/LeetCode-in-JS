/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  const result = []
  const helper = (root, depth) => {
    if (root === null) return false

    if (!result[depth]) {
      result[depth] = [root.val]
    } else {
      if (depth % 2 === 0) {
        result[depth] = [...result[depth], root.val]
      } else {
        result[depth] = [root.val, ...result[depth]]
      }
    }
    helper(root.left, depth + 1)
    helper(root.right, depth + 1)
  }

  helper(root, 0)

  return result
}
