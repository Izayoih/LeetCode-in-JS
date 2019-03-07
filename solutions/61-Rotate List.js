/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head

  let p = head
  let count = 1
  while (p.next) {
    p = p.next
    count++
  }

  p.next = head

  k = k % count
  let step = count - k
  while (step > 0) {
    p = p.next
    step--
  }

  const q = p.next
  p.next = null
  return q
}
