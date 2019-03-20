// outer[i] i连接的节点集合
// inner[i] i节点入度
// 每次找入度为0的节点，去除该节点的所有连接，减去相应入度
// 找不到入度为0的节点说明存在环 return false

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const outer = Array(numCourses)
    .fill()
    .map(() => [])
  const inner = Array(numCourses).fill(0)

  prerequisites.forEach(v => {
    outer[v[1]].push(v[0])
    inner[v[0]]++
  })

  for (let i = 0; i < numCourses; i++) {
    let j = 0
    while (j < numCourses) {
      if (inner[j] === 0) break
      j++
    }
    if (j === numCourses) return false

    inner[j] = -1
    outer[j].forEach(node => inner[node]--)
  }
  return true
}
