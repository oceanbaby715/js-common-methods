/*！
 * trimAll
 * 去除全部空格
 *
 * return String
 *
 * Date：2017-03-15
 * Author：david_wang
 */
String.prototype.trimAll = function () {
	return this.replace(/[\s\uFEFF\xA0]/g, "");
}