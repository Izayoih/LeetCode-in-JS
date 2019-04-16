/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = []

  const helper = (node, depth) => {
    if (node === null) return
    if (res[depth]) {
      res[depth].push(node.val)
    } else {
      res[depth] = [node.val]
    }

    node.children.forEach(c => helper(c, depth + 1))
  }

  helper(root, 0)

  return res
}
