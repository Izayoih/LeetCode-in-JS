/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var val = l1.val + l2.val
  var head = new ListNode(val % 10)
  var carry = val >= 10 ? 1 : 0
  var p = head
  l1 = l1.next
  l2 = l2.next
  while (l1 || l2) {
      val1 = l1 === null ? 0 : l1.val
      val2 = l2 === null ? 0 : l2.val
      val = val1 + val2 + carry
      var node = new ListNode(val % 10)
      var carry = val >= 10 ? 1 : 0
      p.next = node
      p = node
      l1 = l1 === null ? l1 : l1.next
      l2 = l2 === null ? l2 : l2.next
  }
  if (carry === 1) {
      node = new ListNode(1)
      p.next = node
  }
  return head
}
