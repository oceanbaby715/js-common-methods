test.js;
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
};
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
};
/*！
 * addHours
 * 某个时间上增加指定小时 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的小时数
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addHours = function (value) { 
   var date = this;
   if(!isNaN(value)){
   		date.setHours(date.getHours() + value);
   }
   return date;
};
/*！
 * addMilliseconds
 * 某个时间上增加指定毫秒数 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的毫秒数
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addMilliseconds = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setMilliseconds(date.getMilliseconds() + value);
           }
           return date;
 };
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
 };
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
 };
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
 };
/*！
 * addYears
 * 某个时间上增加指定年份 返回新增的时间对象 参数格式不正确则返回原时间对象
 * 参数【value】: Number 需要增加的年的数量
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.addYears = function (value) { 
           var date = this;
           if(!isNaN(value)){
           		date.setYear(date.getFullYear() + value);
           }
           return date;
 };
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
};
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
};
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
 };
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
};
/*！
 * format
 * 时间格式化
 * 参数【formatStr】: String 格式
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));
    str = str.replace(/w|W/g, Week[this.getDay()]);
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str;
};
/*！
 * isLeapYear
 * 判断是否是闰年
 *
 * Date：2017-03-15
 * Author：Yiu Young
 */
Date.prototype.isLeapYear = function () { 
	var year = this.getFullYear();
    return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0); 
};
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
};
/*！
 * 表单操作
 * Date：2017-04-11
 * Author：Terry
 */
(function($) {
	//序列化表单值为json
	//.serializeArray() 方法使用了 W3C 关于 successful controls（有效控件） 的标准来检测哪些元素应当包括在内。特别说明，元素不能被禁用（禁用的元素不会被包括在内），并且元素应当有含有 name 属性。提交按钮的值也不会被序列化。文件选择元素的数据也不会被序列化。
	$.fn.serializeJson = function() {
		var serializeObj = {};
		var array = this.serializeArray();
		var str = this.serialize();
		$(array).each(function() {
			if (serializeObj[this.name]) {
				if ($.isArray(serializeObj[this.name])) {
					serializeObj[this.name].push(this.value);
				} else {
					serializeObj[this.name] = [serializeObj[this.name], this.value];
				}
			} else {
				serializeObj[this.name] = this.value;
			}
		});
		return serializeObj;
	};

	//根据json数据填充表单
	$.fn.fillForm = function(jsonValue) {
		var obj = this;
		$.each(jsonValue, function(name, ival) {
			var $oinput = obj.find("input[name=" + name + "]");
			if ($oinput.attr("type") == "radio" || $oinput.attr("type") == "checkbox") {
				$oinput.each(function() {
					if (Object.prototype.toString.apply(ival) == '[object Array]') { //是复选框，并且是数组  
						for (var i = 0; i < ival.length; i++) {
							if ($(this).val() == ival[i])
								$(this).attr("checked", "checked");
						}
					} else {
						if ($(this).val() == ival)
							$(this).attr("checked", "checked");
					}
				});
			} else if ($oinput.attr("type") == "textarea") { //多行文本框  
				obj.find("[name=" + name + "]").html(ival);
			} else {
				obj.find("[name=" + name + "]").val(ival);
			}
		});
	};

	//Clears the form data. (来自jquery.form.js)
	$.fn.clearForm = function(includeHidden) {
		return this.each(function() {
			$('input,select,textarea', this).clearFields(includeHidden);
		});
	};

	//Clears the selected form elements.(来自jquery.form.js)
	$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
		var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
		return this.each(function() {
			var t = this.type,
				tag = this.tagName.toLowerCase();
			if (re.test(t) || tag == 'textarea') {
				this.value = '';
			} else if (t == 'checkbox' || t == 'radio') {
				this.checked = false;
			} else if (tag == 'select') {
				this.selectedIndex = -1;
			} else if (t == "file") {
				if (/MSIE/.test(navigator.userAgent)) {
					$(this).replaceWith($(this).clone(true));
				} else {
					$(this).val('');
				}
			} else if (includeHidden) {
				// includeHidden can be the value true, or it can be a selector string
				// indicating a special test; for example:
				//  $('#myForm').clearForm('.special:hidden')
				// the above would clean hidden inputs that have the class of 'special'
				if ((includeHidden === true && /hidden/.test(t)) ||
					(typeof includeHidden == 'string' && $(this).is(includeHidden))) {
					this.value = '';
				}
			}
		});
	};

	//Resets the form data.  Causes all form elements to be reset to their original value.(来自jquery.form.js)
	$.fn.resetForm = function() {
		return this.each(function() {
			// guard against an input with the name of 'reset'
			// note that IE reports the reset function as an 'object'
			if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
				this.reset();
			}
		});
	};
})(jQuery);;
/*！
 * currencyUpperCase
 * 将数字转大写形式 小数最多支持4位
 * Date：2017-03-27
 * Author：Yiu Young
 */
Number.prototype.currencyUpperCase = function() {
  var money = this;
  //汉字的数字
  var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
  //基本单位
  var cnIntRadice = new Array('', '拾', '佰', '仟');
  //对应整数部分扩展单位
  var cnIntUnits = new Array('', '万', '亿', '兆');
  //对应小数部分单位
  var cnDecUnits = new Array('角', '分', '毫', '厘');
  //整数金额时后面跟的字符
  var cnInteger = '整';
  //整型完以后的单位
  var cnIntLast = '元';
  //最大处理的数字
  var maxNum = 999999999999999.9999;
  //金额整数部分
  var integerNum;
  //金额小数部分
  var decimalNum;
  //输出的中文金额字符串
  var chineseStr = '';
  //分离金额后用的数组，预定义
  var parts;
  if (money == '') { return ''; }
  money = parseFloat(money);
  if (money >= maxNum) {
    //超出最大处理数字
    return '';
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger;
    return chineseStr;
  }
  //转换为字符串
  money = money.toString();
  if (money.indexOf('.') == -1) {
    integerNum = money;
    decimalNum = '';
  } else {
    parts = money.split('.');
    integerNum = parts[0];
    decimalNum = parts[1].substr(0, 4);
  }
  //获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0;
    var IntLen = integerNum.length;
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1);
      var p = IntLen - i - 1;
      var q = p / 4;
      var m = p % 4;
      if (n == '0') {
        zeroCount++;
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0];
        }
        //归零
        zeroCount = 0;
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q];
      }
    }
    chineseStr += cnIntLast;
  }
  //小数部分
  if (decimalNum != '') {
    var decLen = decimalNum.length;
    for (var i = 0; i < decLen; i++) {
      var n = decimalNum.substr(i, 1);
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger;
  } else if (decimalNum == '') {
    chineseStr += cnInteger;
  }
  return chineseStr;
};
/*！
 * formatMoney
 * 将数字转换成货币格式
 * 参数【places】: Number 保留的小数位
 * 参数【symbol】:  String 符号
 * 参数【thousand】: 每三位的分隔符
 * 参数【decimal】：个位与小数的分隔符
 * Date：2017-03-27
 * Author：Yiu Young
 */
Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "$";
        thousand = thousand || ",";
        decimal = decimal || ".";
        var number = this,
            negative = number < 0 ? "-" : "",
            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};;
/*！
 * isFinite
 * Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。
 * Number.isFinite(value)
 * Date：2017-03-31
 * Author：Terry
 */
Number.isFinite = Number.isFinite || function(value) {
    return typeof value === "number" && isFinite(value);
};
/*！
 * isInteger
 * Number.isInteger() 方法用来判断给定的参数是否为整数。
 * Date：2017-03-31
 * Author：Terry
 */
Number.isInteger = Number.isInteger || function(value) {
	return typeof value === "number" &&
		isFinite(value) &&
		Math.floor(value) === value;
};;
/*！
 * isNaN
 * Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。
 * Date：2017-03-31
 * Author：Terry
 */
Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
};
/*！
 * isSafeInteger
 * Number.isSafeInteger() 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）
 * 安全整数范围为 -(253 - 1)到 253 - 1 之间的整数，包含 -(253 - 1)和 253 - 1。
 * Date：2017-03-31
 * Author：Terry
 */
Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};;
/*！
 * sign
 * Math.sign() 方法用来判断给定的参数是否为整数。
 * Date：2017-03-31
 * Author：Terry
 */
Math.sign = Math.sign || function(x) {
	x = +x // convert to a number
    if (x === 0 || isNaN(x))
        return x
    return x > 0 ? 1 : -1
};;
/*！
 * ConvertNetTDate
 * ConvertNetTDate 方法用来转换C#通过json传到前端的时间字符串，返回一个Date对象，如："2017-03-01T16:33:03.73", 需要把中间的“T”字母去掉
 * ConvertNetTDate(value)
 * Date：2017-03-31
 * Author：Terry
 */

function ConvertNetTDate(str){
	var newStr=str.replace(/T/gi," ");
	return new Date(newStr);
};
/*！
 * DisableWeChatDrop
 * 禁用微信浏览器下拉回弹
 * Date：2017-03-31
 * Author：Terry
 */
function DisableWeChatDrop() {
  var overscroll = function(el) {
    el.addEventListener('touchstart', function() {
      var top = el.scrollTop,
        totalScroll = el.scrollHeight,
        currentScroll = top + el.offsetHeight;
      if (top === 0) {
        el.scrollTop = 1;
      } else if (currentScroll === totalScroll) {
        el.scrollTop = top - 1;
      }
    });

    el.addEventListener('touchmove', function(evt) {
      if (el.offsetHeight < el.scrollHeight)
        evt._isScroller = true;
    });
  }

  overscroll($window);
  document.body.addEventListener('touchmove', function(evt) {
    if (!evt._isScroller) {
      evt.preventDefault();
    }
  });
};
/*！
 * GUID
 * js 生成GUID
 * Date：2017-03-31
 * Author：Terry
 */
function GUID() {
    this.date = new Date();   /* 判断是否初始化过，如果初始化过以下代码，则以下代码将不再执行，实际中只执行一次 */
    if (typeof this.newGUID != 'function') {   /* 生成GUID码 */
        GUID.prototype.newGUID = function () {
            this.date = new Date(); var guidStr = '';
            sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16);
            sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);
            for (var i = 0; i < 9; i++) {
                guidStr += Math.floor(Math.random() * 16).toString(16);
            }
            guidStr += sexadecimalDate;
            guidStr += sexadecimalTime;
            while (guidStr.length < 32) {
                guidStr += Math.floor(Math.random() * 16).toString(16);
            }
            return this.formatGUID(guidStr);
        }
        /* * 功能：获取当前日期的GUID格式，即8位数的日期：19700101 * 返回值：返回GUID日期格式的字条串 */
        GUID.prototype.getGUIDDate = function () {
            return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay());
        }
        /* * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933 * 返回值：返回GUID日期格式的字条串 */
        GUID.prototype.getGUIDTime = function () {
            return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero(parseInt(this.date.getMilliseconds() / 10));
        }
        /* * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现 * 参数: 参数表示准备再前面添加0的数字或可以转换成数字的字符串 * 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串 */
        GUID.prototype.addZero = function (num) {
            if (Number(num).toString() != 'NaN' && num >= 0 && num < 10) {
                return '0' + Math.floor(num);
            } else {
                return num.toString();
            }
        }
        /*  * 功能：将y进制的数值，转换为x进制的数值 * 参数：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10 * 返回值：返回转换后的字符串 */GUID.prototype.hexadecimal = function (num, x, y) {
            if (y != undefined) { return parseInt(num.toString(), y).toString(x); }
            else { return parseInt(num.toString()).toString(x); }
        }
        /* * 功能：格式化32位的字符串为GUID模式的字符串 * 参数：第1个参数表示32位的字符串 * 返回值：标准GUID格式的字符串 */
        GUID.prototype.formatGUID = function (guidStr) {
            var str1 = guidStr.slice(0, 8) + '-', str2 = guidStr.slice(8, 12) + '-', str3 = guidStr.slice(12, 16) + '-', str4 = guidStr.slice(16, 20) + '-', str5 = guidStr.slice(20);
            return str1 + str2 + str3 + str4 + str5;
        }
    }
};
/*！
 * isAndroidMobileDevice
 * 判断是否安卓移动设备访问
 * Date：2017-03-31
 * Author：Terry
 */
function isAndroidMobileDevice(){
    return (/android/i.test(navigator.userAgent.toLowerCase()));
};
/*！
 * isAppleMobileDevice
 * 判断是否苹果移动设备访问
 * Date：2017-03-31
 * Author：Terry
 */
function isAppleMobileDevice(){
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
};
/*！
 * isAppleMobileDevice
 * 判断是否移动设备访问
 * Date：2017-03-31
 * Author：Terry
 */
function isMobileUserAgent() {
	return (/iphone|ipod|ipad|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
};
/*! http://mths.be/endswith v0.2.0 by @mathias */
if (!String.prototype.endsWith) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch(error) {}
      return result;
    }());
    var toString = {}.toString;
    var endsWith = function(search) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      if (search && toString.call(search) == '[object RegExp]') {
        throw TypeError();
      }
      var stringLength = string.length;
      var searchString = String(search);
      var searchLength = searchString.length;
      var pos = stringLength;
      if (arguments.length > 1) {
        var position = arguments[1];
        if (position !== undefined) {
          // `ToInteger`
          pos = position ? Number(position) : 0;
          if (pos != pos) { // better `isNaN`
            pos = 0;
          }
        }
      }
      var end = Math.min(Math.max(pos, 0), stringLength);
      var start = end - searchLength;
      if (start < 0) {
        return false;
      }
      var index = -1;
      while (++index < searchLength) {
        if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
          return false;
        }
      }
      return true;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'endsWith', {
        'value': endsWith,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.endsWith = endsWith;
    }
  }());
};
/*！
 * format
 * 将字符传转换为指定的其他字符串
 *
 * 参数【parameters】：Array || 多个String  需要替换的字符串   return String
 * 例子 'hello {0}{1}{2}ld'.format('w','o','r')  return String 'hello world'
 *     'hello {0}{1}{2}ld'.format(['w','o','r']) return String 'hello world'
 *
 * Date：2017-03-15
 * Author：david_wang
 */
String.prototype.format = function (parameters) {
	try {
		if (arguments.length < 1) {
			throw '参数最少1个'
		}
		var result = '';
		if (parameters.constructor !== Array) {
			var arr = [];
			for (var i = 0; i < arguments.length; i++) {
				arr[i] = arguments[i];
			}
			parameters = arr;
		}
		for (var i = 0; i < this.length; i++) {
			if (this.charAt(i) === '{') {
				var index = '';
				while (true) {
					i++;
					if (this.charAt(i) === '}') {
						break;
					}
					if (i >= this.length || (isNaN(this.charAt(i)) && this.charAt(i) !== '}')) {
						throw '缺失}括号';
					}
					if (/^\s+/.test(this.charAt(i)) || isNaN(this.charAt(i))) {
						throw '{}中的值错误';
					}
					index += this.charAt(i)
				}
				if (parseInt(index) >= parameters.length) {
					throw '超过数组的索引长度';
				}
				result += parameters[index];
				continue;
			}
			result += this.charAt(i)
		}
		return result;
	}
	catch (err) {
		throw err;
	}
};

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
};
/*！
 * isNullOrEmpty
 * 判断字符是否为null或空
 *
 * 例子 ''.isNullOrEmpty() return Bool true
 *
 * Date：2017-03-15
 * Author：david_wang
 */
String.prototype.isNullOrEmpty = function () {
	if (this === null || this === undefined || /^(\s|\u00A0)*$/.test(this)) {
		return true
	}
	else {
		return false
	}
};
/*! http://mths.be/startswith v0.2.0 by @mathias */
if (!String.prototype.startsWith) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch(error) {}
      return result;
    }());
    var toString = {}.toString;
    var startsWith = function(search) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      if (search && toString.call(search) == '[object RegExp]') {
        throw TypeError();
      }
      var stringLength = string.length;
      var searchString = String(search);
      var searchLength = searchString.length;
      var position = arguments.length > 1 ? arguments[1] : undefined;
      // `ToInteger`
      var pos = position ? Number(position) : 0;
      if (pos != pos) { // better `isNaN`
        pos = 0;
      }
      var start = Math.min(Math.max(pos, 0), stringLength);
      // Avoid the `indexOf` call if no match is possible
      if (searchLength + start > stringLength) {
        return false;
      }
      var index = -1;
      while (++index < searchLength) {
        if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
          return false;
        }
      }
      return true;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'startsWith', {
        'value': startsWith,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.startsWith = startsWith;
    }
  }());
};
/*！
 * trimAll
 * 去除全部空格
 *
 * return String
 *
 * Date：2017-03-15
 * Author：david_wang
 */
String.prototype.trimAll = function () {
	return this.replace(/[\s\uFEFF\xA0]/g, "");
};
/*！
 * trimLeft
 * 去除字符串左边的空白符
 *
 * return String
 *
 * Date：2017-03-31
 * Author：Terry
 */
if (!String.prototype.trimLeft) {
	String.prototype.trimLeft = function() {
		return this.replace(/^[\s\uFEFF\xA0]+/g, "");
	}
};
/*！
 * trimRight
 * 去除字符串右边的空白字符 (space, tab, no-break space 等)以及所有的行结束符（如 LF，CR）。
 *
 * return String
 *
 * Date：2017-03-15
 * Author：Terry
 */
if (!String.prototype.trimRight) {
	String.prototype.trimRight = function() {
		return this.replace(/[\s\uFEFF\xA0]+$/g, "");
	}
}