/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  const maxIndex = nums => {
    let max = 0
    nums.forEach((num, index) => {
      if (num > nums[max]) max = index
    })
    return max
  }

  const helper = arr => {
    if (!arr.length) return null
    const max = maxIndex(arr)
    const root = new TreeNode(arr[max])

    root.left = helper(arr.slice(0, max))
    root.right = helper(arr.slice(max + 1))

    return root
  }

  return helper(nums)
}
