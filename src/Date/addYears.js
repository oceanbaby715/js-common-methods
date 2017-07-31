/*！
 * addYears
 * 某个时间上增加指定年份 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的年的数量
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addYears = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setYear(date.getFullYear() + value);
           }
           return date;
 }