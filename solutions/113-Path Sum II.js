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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) return []
  const result = []

  const dfs = (node, list, acc) => {
    if (node.left === null && node.right === null) {
      if (node.val + acc === sum) {
        result.push([...list, node.val])
      }
      return
    }

    if (node.left !== null) dfs(node.left, [...list, node.val], acc + node.val)
    if (node.right !== null) dfs(node.right, [...list, node.val], acc + node.val)
  }

  dfs(root, [], 0)

  return result
}
