/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// 链表逆序
const reverseList = function(head) {
  if (head === null || head.next === null) return head
  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}

// 链表合并
const mergeList = function(first, second) {
  const head = new ListNode(0)
  let p = head
  while (first !== null && second !== null) {
    p.next = first
    first = first.next
    p = p.next
    p.next = second
    second = second.next
    p = p.next
  }
  if (first !== null) p.next = first
  if (second !== null) p.next = second

  return head.next
}

const reorderList = function(head) {
  if (!head) return null

  // 遍历获取链表长度
  let i = 0
  let p = head
  while (p) {
    i++
    p = p.next
  }
  p = head

  const mid = Math.ceil(i / 2)
  let q = head
  i = 0
  while (i < mid - 1) {
    p = p.next
    i++
  }
  q = p.next
  p.next = null
  p = head

  return mergeList(p, reverseList(q))
}
