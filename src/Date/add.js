/*！
 * add
 * 根据某种类型新增数量 返回新增后的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的数值
 * 参数【type】:  String 新增的部分 如：新增年 add(1,"yyyy")
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.add = function(value,type) {
    var date = this;
    if(!isNaN(value) && typeof(type) =="string"){
        switch(type)
        {
            case "year": case "y": 
                date.setYear(date.getFullYear() + value);
                break;
            case "month": case "M": 
                 date.setMonth(date.getMonth() + value);
                 break;
            case "day": case "d":
                 date.setDate(date.getDate()+value);
                 break;
            case "hour": case "hh": 
                  date.setHours(date.getHours() + value);
                  break;
            case "minute": case "m":
                  date.setMinutes(date.getMinutes() + value);
                  break;
            case "second": case "s":
                  date.setSeconds(date.getSeconds() + value);
                  break;
            case "millisecond": case "ms":
                  date.setMilliseconds(date.getMilliseconds() + value);
                  break;
        }
    }
    return date;
}