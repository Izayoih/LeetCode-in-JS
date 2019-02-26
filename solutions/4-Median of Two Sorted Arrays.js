/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var newArr = nums1.concat(nums2).sort((a, b) => {
    return a - b
  })
  var total = nums1.length + nums2.length
  var mid = Math.floor(total / 2)
  if (total % 2) {
    return newArr[mid]
  } else {
    return (newArr[mid] + newArr[mid - 1]) / 2
  }
}
