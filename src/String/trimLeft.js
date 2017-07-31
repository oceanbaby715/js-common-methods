/*！
 * trimLeft
 * 去除字符串左边的空白符
 *
 * return String
 *
 * Date：2017-03-31
 * Author：Terry
 */
if (!String.prototype.trimLeft) {
	String.prototype.trimLeft = function() {
		return this.replace(/^[\s\uFEFF\xA0]+/g, "");
	}
}