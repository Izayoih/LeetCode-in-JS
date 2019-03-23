/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (root === null) return 0

  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

const helper = (root, sum) => {
  let count = 0
  if (root === null) return count
  if (sum === root.val) count++

  count += helper(root.left, sum - root.val)
  count += helper(root.right, sum - root.val)
  return count
}
