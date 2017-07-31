/*！
 * trimRight
 * 去除字符串右边的空白字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。
 *
 * return String
 *
 * Date：2017-03-15
 * Author：Terry
 */
if (!String.prototype.trimRight) {
	String.prototype.trimRight = function() {
		return this.replace(/[\s\uFEFF\xA0]+$/g, "");
	}
}