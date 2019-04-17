/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length === 0) return null

  const rootVal = postorder[postorder.length - 1]
  const root = new TreeNode(rootVal)
  const rootIndex = inorder.indexOf(rootVal)

  const leftIn = inorder.slice(0, rootIndex)
  const rightIn = inorder.slice(rootIndex + 1)

  const leftPost = postorder.slice(0, leftIn.length)
  const rightPost = postorder.slice(-1 - rightIn.length, -1)

  root.left = buildTree(leftIn, leftPost)
  root.right = buildTree(rightIn, rightPost)

  return root
}
