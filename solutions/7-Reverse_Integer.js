/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var res =  parseInt(x.toString().replace(/\d+/, function (a) {return a.split('').reverse().join('')}))
  if (res < -2147483648 || res > 2147483648) {
      return 0
  }
  return res
}
