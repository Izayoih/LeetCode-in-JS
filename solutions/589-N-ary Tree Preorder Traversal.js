/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = []

  const helper = node => {
    if (node === null) return

    res.push(node.val)
    node.children.forEach(c => helper(c))
  }

  helper(root)

  return res
}
