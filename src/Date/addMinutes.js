/*！
 * addMinutes
 * 某个时间上增加指定分钟数 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的分钟数
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addMinutes = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setMinutes(date.getMinutes() + value);
           }
           return date;
 }