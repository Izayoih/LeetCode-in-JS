// 条件：
// 1. 小矩形总面积和边界形成的大矩形面积相等
// 2. 用set记录小矩形的点坐标 非边界点至少会出现两次 出现重复的点就去除 最后set中的点只剩下四个边界点

/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  let [left, bottom, right, top] = rectangles[0]
  const V = new Set()

  for (let i = 0; i < rectangles.length; i++) {
    const current = rectangles[i]
    left = Math.min(left, current[0])
    bottom = Math.min(bottom, current[1])
    right = Math.max(right, current[2])
    top = Math.max(top, current[3])

    const leftBottom = `${current[0]}-${current[1]}`
    V.has(leftBottom) ? V.delete(leftBottom) : V.add(leftBottom)

    const leftTop = `${current[0]}-${current[3]}`
    V.has(leftTop) ? V.delete(leftTop) : V.add(leftTop)

    const rightTop = `${current[2]}-${current[3]}`
    V.has(rightTop) ? V.delete(rightTop) : V.add(rightTop)

    const rightBottom = `${current[2]}-${current[1]}`
    V.has(rightBottom) ? V.delete(rightBottom) : V.add(rightBottom)
  }

  if (
    !V.has(`${left}-${bottom}`) ||
    !V.has(`${left}-${top}`) ||
    !V.has(`${right}-${top}`) ||
    !V.has(`${right}-${bottom}`) ||
    V.size !== 4
  )
    return false

  const sum = rectangles.reduce((acc, rec) => acc + (rec[3] - rec[1]) * (rec[2] - rec[0]), 0)
  return sum === (top - bottom) * (right - left)
}
