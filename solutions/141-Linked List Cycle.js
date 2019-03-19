/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  const hashMap = []
  while (head) {
    if (hashMap.indexOf(head) !== -1) {
      return true
    }
    hashMap.push(head)
    head = head.next
  }
  return false
}
