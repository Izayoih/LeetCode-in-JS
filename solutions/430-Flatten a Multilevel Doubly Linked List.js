/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) return null

  const stack = []
  let p = head

  while (p) {
    if (p.child) {
      if (p.next) {
        stack.push(p.next)
      }
      p.next = p.child
      p.child.prev = p
      p.child = null
    } else if (!p.next) {
      if (stack.length) {
        p.next = stack.pop()
        p.next.prev = p
      }
    }
    p = p.next
  }
  return head
}
