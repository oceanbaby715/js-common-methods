/*！
 * addDays
 * 某个时间上增加指定天数 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要新增的天数
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addDays = function (value) { 
   var date = this;
   if(!isNaN(value)){
      date.setDate(date.getDate()+value);
   }
   return date;
}