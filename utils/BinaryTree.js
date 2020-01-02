function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const createBinaryTree = (arr, i = 0) => {
  if (i > arr.length - 1) return null

  const node = new TreeNode(arr[i])
  node.left = createBinaryTree(arr, 2 * i + 1)
  node.right = createBinaryTree(arr, 2 * i + 2)

  return node
}

module.exports = {
  createBinaryTree
}
