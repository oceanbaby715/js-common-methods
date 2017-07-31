/*！
 * format
 * 将字符传转换为指定的其他字符串
 *
 * 参数【parameters】：Array || 多个String  需要替换的字符串   return String
 * 例子 'hello {0}{1}{2}ld'.format('w','o','r')  return String 'hello world'
 *     'hello {0}{1}{2}ld'.format(['w','o','r']) return String 'hello world'
 *
 * Date：2017-03-15
 * Author：david_wang
 */
String.prototype.format = function (parameters) {
	try {
		if (arguments.length < 1) {
			throw '参数最少1个'
		}
		var result = '';
		if (parameters.constructor !== Array) {
			var arr = [];
			for (var i = 0; i < arguments.length; i++) {
				arr[i] = arguments[i];
			}
			parameters = arr;
		}
		for (var i = 0; i < this.length; i++) {
			if (this.charAt(i) === '{') {
				var index = '';
				while (true) {
					i++;
					if (this.charAt(i) === '}') {
						break;
					}
					if (i >= this.length || (isNaN(this.charAt(i)) && this.charAt(i) !== '}')) {
						throw '缺失}括号';
					}
					if (/^\s+/.test(this.charAt(i)) || isNaN(this.charAt(i))) {
						throw '{}中的值错误';
					}
					index += this.charAt(i)
				}
				if (parseInt(index) >= parameters.length) {
					throw '超过数组的索引长度';
				}
				result += parameters[index];
				continue;
			}
			result += this.charAt(i)
		}
		return result;
	}
	catch (err) {
		throw err;
	}
}