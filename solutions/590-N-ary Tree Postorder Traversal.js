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
var postorder = function(root) {
  const res = []

  const helper = node => {
    if (node === null) return

    node.children.forEach(c => helper(c))
    res.push(node.val)
  }

  helper(root)

  return res
}
