/*！
 * isInteger
 * Number.isInteger() 方法用来判断给定的参数是否为整数。
 * Date：2017-03-31
 * Author：Terry
 */
Number.isInteger = Number.isInteger || function(value) {
	return typeof value === "number" &&
		isFinite(value) &&
		Math.floor(value) === value;
};