/*！
 * dayOfweek
 * 返回当天星期几
 *
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.dayOfweek = function () { 
    var today = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六"); //创建星期数组
    return today[this.getDay()];  //返一个星期中的某一天，其中0为星期日 
}