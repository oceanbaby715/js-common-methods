/*！
 * isFinite
 * Number.isFinite() 方法用来检测传入的参数是否是一个有穷数（finite number）。
 * Number.isFinite(value)
 * Date：2017-03-31
 * Author：Terry
 */
Number.isFinite = Number.isFinite || function(value) {
    return typeof value === "number" && isFinite(value);
}