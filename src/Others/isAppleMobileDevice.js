/*！
 * isAppleMobileDevice
 * 判断是否苹果移动设备访问
 * Date：2017-03-31
 * Author：Terry
 */
function isAppleMobileDevice(){
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}