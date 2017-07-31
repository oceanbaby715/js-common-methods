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
})(jQuery);