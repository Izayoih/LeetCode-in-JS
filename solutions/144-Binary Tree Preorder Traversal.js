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

var preorderTraversal = function(root, array = []) {
  if (root === null) return array

  array.push(root.val)
  preorderTraversal(root.left, array)
  preorderTraversal(root.right, array)

  return array
}
