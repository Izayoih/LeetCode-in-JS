/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }

  const root = new TreeNode(preorder[0])
  const headIndex = inorder.indexOf(preorder[0])

  const leftInorder = inorder.slice(0, headIndex)
  const leftPreorder = preorder.slice(1, 1 + leftInorder.length)

  const rightInorder = inorder.slice(headIndex + 1)
  const rightPreorder = preorder.slice(1 + leftInorder.length)

  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)

  return root
}
