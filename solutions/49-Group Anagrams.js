/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hashMap = {}
  strs.forEach(s => {
    const key = s
      .split('')
      .sort()
      .join('')
    if (hashMap.hasOwnProperty(key)) {
      hashMap[key].push(s)
    } else {
      hashMap[key] = [s]
    }
  })

  return Object.keys(hashMap).map(key => hashMap[key])
}
