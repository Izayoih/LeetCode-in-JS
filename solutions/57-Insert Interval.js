// discuss一个dalao的答案
// 自己想的是把newInterval插进intervals然后走56题的方法..

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  const result = []
  let i = 0

  while (i < intervals.length && intervals[i].end < newInterval.start) {
    result.push(intervals[i])
    i++
  }

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval = new Interval(
      Math.min(intervals[i].start, newInterval.start),
      Math.max(intervals[i].end, newInterval.end)
    )
    i++
  }
  result.push(newInterval)

  while (i < intervals.length) {
    result.push(intervals[i])
    i++
  }

  return result
}
