/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, array = []) {
  if (root === null) return array

  inorderTraversal(root.left, array)
  array.push(root.val)
  inorderTraversal(root.right, array)

  return array
}
