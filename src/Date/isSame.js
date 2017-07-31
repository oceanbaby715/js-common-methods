/*！
 * isSame
 * 判断两个时间的年或月或日 是否相等
 * 参数【time】: Date 需要判断的时间对象
 * 参数【type】: String 需要判断时间的某个部分是否相等
 *
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.isSame = function(time,type) {
    var result = false;
    if(time instanceof Date && typeof(type) == "string"){
        switch(type)
        {
           case "year": case "y": 
             result = this.getFullYear() == time.getFullYear();
             break;
           case "month": case "M": 
             result = this.getMonth() == time.getMonth();
             break;
           case "day": case "d":
             reuslt = this.getDate() == time.getDate();
             break;
           case "date":
              if(this.getFullYear() == time.getFullYear() && this.getMonth() == time.getMonth() && this.getDate() == time.getDate()){
                result = true;
              }
              break;
           case "all":
             reuslt = this.getTime() == time.getTime();
             break;
        }
    }
    else{
        throw 'time或type格式不正确 正确格式time:Date type:String';
    }
    return result;
}