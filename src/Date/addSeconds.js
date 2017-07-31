/*！
 * addSeconds
 * 某个时间上增加指定秒 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的秒数
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addSeconds = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setSeconds(date.getSeconds() + value);
           }
           return date;
 }