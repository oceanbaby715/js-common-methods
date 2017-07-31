/*！
 * isNullOrEmpty
 * 判断字符是否为null或空
 *
 * 例子 ''.isNullOrEmpty() return Bool true
 *
 * Date：2017-03-15
 * Author：david_wang
 */
String.prototype.isNullOrEmpty = function () {
	if (this === null || this === undefined || /^(\s|\u00A0)*$/.test(this)) {
		return true
	}
	else {
		return false
	}
}