/*！
 * compareTo
 * 比较两个时间 前者大于后者返回1 相等返回0 小于返回-1 参数格式不正确也返回-1
 * 参数【time】: Date 需要进行比较的时间对象
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.compareTo = function (time) { 
    var ret = -1;
    if(time instanceof Date){
        if(this.getTime() == time.getTime()){
           ret = 0;
         }
         if(this.getTime() > time.getTime()){
            ret = 1
         }
    }
    else{
        throw 'time格式不正确 正确格式time:Date';
    }
    return ret;
}