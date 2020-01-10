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
var levelOrderBottom = function(root) {
  const result = []

  const helper = (root, depth) => {
    if (root === null) return

    if (result[depth]) {
      result[depth].push(root.val)
    } else {
      result[depth] = [root.val]
    }

    helper(root.left, depth + 1)
    helper(root.right, depth + 1)
  }

  helper(root, 0)

  return result.reverse()
}
