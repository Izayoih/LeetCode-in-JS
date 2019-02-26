/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var length = 1
  var p = head
  if (p.next === null) {
    return null
  }
  while (p.next) {
    length++
    p = p.next
  }
  var index = length - n
  p = head
  while (index - 1 > 0) {
    p = p.next
    index--
  }
  if (index === 0) {
    p = p.next
    head.next = null
    return p
  }
  var pre = p
  var next = p.next.next
  pre.next = next
  return head
}
