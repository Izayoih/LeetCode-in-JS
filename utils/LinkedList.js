function ListNode(val) {
  this.val = val
  this.next = null
}

const createLinkedList = arr => {
  const head = new ListNode(0)
  let temp = head
  arr.reduce((p, val) => (p.next = new ListNode(val)), temp)

  return head.next
}

module.exports = {
  createLinkedList
}
