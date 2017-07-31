/*！
 * diffFormat
 * 两个时间相减 之后 显示离某个时间还有多少天 多少小时 多少分钟 多少秒，参数格式不正确则返回原时间对象
 * 参数【time】: Date 需要相减的时间对象
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.diffFormat = function (time) { 
       var str = "";
       if(time instanceof Date){
          var totalmillisecond = this.getTime() - time.getTime();
          //计算出相差天数
          var days=Math.floor(totalmillisecond/(24*3600*1000));
          //计算出小时数
          var leave1=totalmillisecond%(24*3600*1000);    //计算天数后剩余的毫秒数
          var hours=Math.floor(leave1/(3600*1000));
          //计算相差分钟数
          var leave2=leave1%(3600*1000);     //计算小时数后剩余的毫秒数
          var minutes=Math.floor(leave2/(60*1000));
          //计算相差秒数
          var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
          var seconds=Math.round(leave3/1000);
          str = days +"天 "+hours+"小时 "+minutes+"分钟 "+seconds+"秒";
        }
        return str;
}