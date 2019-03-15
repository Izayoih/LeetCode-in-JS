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
var levelOrder = function(root) {
  const result = []
  const helper = (root, depth) => {
    if (root === null) return false

    if (!result[depth]) {
      result[depth] = [root.val]
    } else {
      result[depth] = [...result[depth], root.val]
    }
    helper(root.left, depth + 1)
    helper(root.right, depth + 1)
  }

  helper(root, 0)

  return result
}
