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
};