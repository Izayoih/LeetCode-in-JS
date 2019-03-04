/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  lists = list.filter(item => item !== null)
  let head = null
  let p = null

  while (lists.length) {
    const array = lists.map(node => node.val)
    const min = Math.min.apply(null, array)
    const index = array.indexOf(min)
    const node = lists[index]
    const newNode = new ListNode(min)
    if (head) {
      p.next = newNode
      p = p.next
    } else {
      head = newNode
      p = head
    }

    if (node.next === null) {
      lists.splice(index, 1)
    } else {
      lists[index] = node.next
    }
  }

  return head
}
