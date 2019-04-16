/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (pre.length === 0) return null
  if (pre.length === 1) return new TreeNode(pre[0])

  const root = new TreeNode(pre[0])
  const headIndex = post.indexOf(pre[1])

  const leftPost = post.slice(0, headIndex + 1)
  const rightPost = post.slice(headIndex + 1, post.length - 1)

  const leftPre = pre.slice(1, leftPost.length + 1)
  const rightPre = pre.slice(1 + leftPre.length)

  root.left = constructFromPrePost(leftPre, leftPost)
  root.right = constructFromPrePost(rightPre, rightPost)

  return root
}
