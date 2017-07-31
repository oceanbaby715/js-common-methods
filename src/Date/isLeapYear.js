/*！
 * isLeapYear
 * 判断是否是闰年
 *
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.isLeapYear = function () { 
	var year = this.getFullYear();
    return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 
}