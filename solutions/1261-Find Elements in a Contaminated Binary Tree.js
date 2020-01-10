/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  const helper = (root, val) => {
    if (root === null) return

    root.val = val

    helper(root.left, val * 2 + 1)
    helper(root.right, val * 2 + 2)
  }

  helper(root, 0)

  this.tree = root
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target, root) {
  if (root === null) return false

  const node = root || this.tree

  if (target === node.val) return true

  return this.find(target, node.left) || this.find(target, node.right)
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
