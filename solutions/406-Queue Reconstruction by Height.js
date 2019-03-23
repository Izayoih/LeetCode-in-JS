/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))

  return people.reduce((result, current) => {
    result.splice(current[1], 0, current)
    return result
  }, [])
}
