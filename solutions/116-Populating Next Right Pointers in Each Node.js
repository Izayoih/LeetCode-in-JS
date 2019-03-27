/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const level = []

  const helper = (node, depth) => {
    if (node === null) return false

    if (!level[depth]) {
      level[depth] = [node]
    } else {
      level[depth][level[depth].length - 1].next = node
      level[depth].push(node)
    }
    helper(node.left, depth + 1)
    helper(node.right, depth + 1)
  }

  helper(root, 0)

  return root
}
