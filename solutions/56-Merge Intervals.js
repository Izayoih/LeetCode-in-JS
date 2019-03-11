/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  const result = []
  intervals.sort((a, b) => a.start - b.start)

  intervals.forEach(interval => {
    const last = result[result.length - 1]
    if (result.length === 0 || last.end < interval.start) {
      result.push(interval)
    } else {
      last.end = Math.max(last.end, interval.end)
    }
  })

  return result
}
