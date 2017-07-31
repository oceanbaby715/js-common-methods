/*！
 * ConvertNetTDate
 * ConvertNetTDate 方法用来转换C#通过json传到前端的时间字符串，返回一个Date对象，如："2017-03-01T16:33:03.73", 需要把中间的“T”字母去掉
 * ConvertNetTDate(value)
 * Date：2017-03-31
 * Author：Terry
 */

function ConvertNetTDate(str){
	var newStr=str.replace(/T/gi," ");
	return new Date(newStr);
}