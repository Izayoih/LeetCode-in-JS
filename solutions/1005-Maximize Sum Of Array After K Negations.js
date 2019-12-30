/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
/**
 * 先从小到达排序
 * 反转负数，直达K个或没有负数为止
 * 然后K-i得到还需要反转的次数
 * 若偶数次 直接求和
 * 若基数次 求和再减去两倍当前数组最小值（不是原数组）
 */
var largestSumAfterKNegations = function(A, K) {
  A.sort((a, b) => a - b)

  const getSum = arr => arr.reduce((a, b) => a + b, 0)
  const getMin = arr => Math.min.apply(null, arr)

  let sum = 0
  let i = 0

  for (; i < K && i < A.length; i++) {
    if (A[i] < 0) A[i] = -A[i]
    else break
  }

  if ((K - i) % 2 === 0) {
    return getSum(A)
  } else {
    return getSum(A) - 2 * getMin(A)
  }
}
