/*！
 * isSafeInteger
 * Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）
 * 安全整数范围为 -(253 - 1)到 253 - 1 之间的整数，包含 -(253 - 1)和 253 - 1。
 * Date：2017-03-31
 * Author：Terry
 */
Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};