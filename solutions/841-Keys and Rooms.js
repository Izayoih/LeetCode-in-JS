/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const visited = Array(rooms.length).fill(false)
  visited[0] = true
  const stack = []
  stack.push(0)

  while (stack.length !== 0) {
    const current = stack.pop()
    rooms[current].forEach(key => {
      if (!visited[key]) {
        visited[key] = true
        stack.push(key)
      }
    })
  }

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) return false
  }

  return true
}
