/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  return parseInt(N.toString(2).replace(/\d/g, a => +!+a), 2)
}
