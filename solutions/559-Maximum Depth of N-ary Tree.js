/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0

  let result = 1
  const helper = (node, depth) => {
    if (node.children.length === 0) {
      result = Math.max(result, depth)
    }

    node.children.forEach(c => helper(c, depth + 1))
  }

  helper(root, 1)

  return result
}
