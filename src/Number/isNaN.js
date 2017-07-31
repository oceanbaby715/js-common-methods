/*！
 * isNaN
 * Number.isNaN() 方法用来检测传入的值是否是 NaN。该方法比传统的全局函数 isNaN() 更可靠。
 * Date：2017-03-31
 * Author：Terry
 */
Number.isNaN = Number.isNaN || function(value) {
    return typeof value === "number" && isNaN(value);
}