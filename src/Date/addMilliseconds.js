/*！
 * addMilliseconds
 * 某个时间上增加指定毫秒数 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的毫秒数
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addMilliseconds = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setMilliseconds(date.getMilliseconds() + value);
           }
           return date;
 }