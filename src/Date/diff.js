/*！
 * diff
 * 两个时间相减 返回两个时间之间的差
 * 参数【time】: Date 需要相减的时间对象 
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.diff = function (time) { 
	var days = 0;
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	var milliseconds = 0;
	if(time instanceof Date){
		var totalMilliseconds = this.getTime() - time.getTime();
	    days = parseInt(totalMilliseconds /(24 * 60 * 60 * 1000));
		hours = parseInt(totalMilliseconds /(60 * 60 * 1000));
		minutes = parseInt(totalMilliseconds /(60 * 1000));
		seconds = parseInt(totalMilliseconds /1000);
		milliseconds = totalMilliseconds;
	}
    return obj = {
    	totaldays : days,
    	totalhours : hours,
    	totalminutes : minutes,
    	totalseconds : seconds,
    	totalmilliseconds : milliseconds
    };
 }