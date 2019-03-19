/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const hashMap = []
  while (headA) {
    hashMap.push(headA)
    headA = headA.next
  }

  while (headB) {
    if (hashMap.indexOf(headB) !== -1) {
      return headB
    }
    headB = headB.next
  }

  return null
}
