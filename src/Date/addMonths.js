/*！
 * addMonths
 * 某个时间上增加指定月 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加月的数量
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addMonths = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setMonth(date.getMonth() + value);
           }
           return date;
 }